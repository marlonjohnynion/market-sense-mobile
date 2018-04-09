import React from 'react'
import { Container, Text } from 'native-base'
import { View } from 'react-native'

export const OrderConfirmationContainer = (props) => {
  let { productPrice, lotSize, productTitle } = props.product
  let { quantity, deliveryDate } = props.orderData
  const price = parseFloat(productPrice)
  lotSize = parseFloat(lotSize)
  quantity = parseInt(quantity)
  const totalPrice = quantity * price
  if (!(deliveryDate && quantity && price)) {
    return <SummaryError/>
  }
  return (
    <View style={{marginRight: 15, marginLeft: 15}}>
      <Text style={{fontSize: 16}}>Item: {productTitle}</Text>
      <Text style={{fontSize: 16}}>Price: {price} per {lotSize}</Text>
      <Text style={{fontSize: 16}}>Quantity: {quantity}</Text>
      <Text style={{fontSize: 16}}>Total Price: {totalPrice}</Text>
      <Text style={{fontSize: 16}}>You agree to order {quantity * lotSize} {quantity > 1 ? 'pcs' : 'pc'} of {productTitle} worth
        ₱{totalPrice} to be delivered on</Text>
    </View>
  )
}

const SummaryError = () => (
  <Text>Please complete order information to complete order!</Text>
)

export default OrderConfirmationContainer
