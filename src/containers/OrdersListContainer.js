import React from 'react'
import { connect } from 'react-redux'
import OrdersList from '../components/OrdersList'

const OrdersListContainer = props => {
  const { orders } = props
  return (
    <OrdersList orders={orders}/>
  )
}

const mapStateToProps = state => {
  return {
    orders: state.orders.ordersList
  }
}

export default connect(mapStateToProps)(OrdersListContainer)
