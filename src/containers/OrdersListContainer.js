import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { viewOrderReceipt } from '../actions/orderActions'
import OrdersList from '../components/OrdersList'

const OrdersListContainer = (props) => {
  const { orders, actions } = props
  return (
    <OrdersList orders={orders} actions={actions}/>
  )
}

const mapStateToProps = state => {
  return {
    orders: state.orders.ordersList
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ viewOrderReceipt }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(OrdersListContainer)
