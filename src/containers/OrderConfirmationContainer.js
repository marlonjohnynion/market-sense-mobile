import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'native-base'
import OrderConfirmation from '../components/OrderConfirmation'

export const OrderConfirmationContainer = (props) => {
  const order = Object.assign(props.order, props.product)
  return (
    <Container>
      <OrderConfirmation order={order}/>
    </Container>
  )
}

const mapStateToProps = (state) => {
  const order = state.orders.currentOrder
  const product = state.products.productsList.filter((product) => product.key !== order.productKey)[0]
  console.log(product)
  return {
    order: order,
    product: product
  }
}

export default connect(mapStateToProps)(OrderConfirmationContainer)
