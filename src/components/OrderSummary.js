import React from 'react'
import { Text, StyleSheet } from 'native-base'
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
    <View style={styles.container}>
      <Text style={styles.confirmationText}>You agree to
        order {quantity * lotSize} {parseInt(quantity) > 1 ? ' pcs' : ' pc'} of {productTitle} worth
        ₱{totalPrice} to be delivered on {deliveryDate}.</Text>
    </View>
  )
}

const SummaryError = () => (
  <Text>Please complete order information to complete order!</Text>
)

const styles = StyleSheet.create({
  container: { marginRight: 15, marginLeft: 15 },
  confirmationText: { fontSize: 16, lineHeight: 25 }
})

export default OrderConfirmationContainer
