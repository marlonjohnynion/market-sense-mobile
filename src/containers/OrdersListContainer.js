import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { viewOrderReceipt } from '../actions/orderActions'
import DataList from '../components/DataList'
import OrdersListItem from '../components/OrdersListItem'

const ListItem = ({data, actions}) => {
  return <OrdersListItem key={data.invoiceNumber} order={data} onPress={actions.viewOrderReceipt}/>
}

const OrdersListContainer = (props) => {
  const { orders, actions } = props
  return <DataList data={orders} actions={actions} RowComponent={ListItem}/>
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
