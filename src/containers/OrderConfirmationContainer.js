import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'native-base'
import OrderConfirmation from '../components/OrderConfirmation'

export const OrderConfirmationContainer = (props) => {
  const { order } = props
  return (
    <Container>
      <OrderConfirmation order={order}/>
    </Container>
  )
}

const mapStateToProps = (state) => {
  const order = state.orders.currentOrder
  return {
    order: order
  }
}

export default connect(mapStateToProps)(OrderConfirmationContainer)
