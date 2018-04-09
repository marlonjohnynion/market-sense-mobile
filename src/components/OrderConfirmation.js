import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Text, Container } from 'native-base'

const OrderConfirmation = props => {
  const { productTitle, deliveryDate, productPrice, quantity } = props.order
  return (
    <Container>
      <Container style={styles.header}>
        <Text style={styles.headingHeader}>₱{productPrice}</Text>
        <Text style={styles.headingLabel}>Total Due</Text>
      </Container>
      <Text style={styles.subHeading}>Order Summary</Text>
      <Container style={styles.orderSummary}>
        <Text style={styles.regularText}>Item: {productTitle}</Text>
        <Text style={styles.regularText}>Delivery Date: {deliveryDate}</Text>

        <Text style={styles.regularText}>Quantity: {quantity}</Text>
      </Container>

    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    paddingTop: 15
  },
  header: {
    paddingLeft: 15,
    paddingTop: 30,
    paddingBottom: 10,
    paddingRight: 20,
    flex: 1,
    maxHeight: 200
  },
  headingHeader: {
    fontSize: 54
  },
  headingLabel: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'green'
  },
  image: {
    height: 100,
    width: null
  },
  orderSummary: {
    margin: 15
  },
  regularText: {
    fontSize: 18,
    paddingTop: 5
  }
})

export default OrderConfirmation
