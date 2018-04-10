import React from 'react'
import { ListItem, Left, Thumbnail, Body, Text, Right } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet } from 'react-native'
import { roundToTwoFixedDecimalPlaces, getDateInWords } from '../common/helpers'

const OrdersListItem = props => {
  const { invoiceNumber, product, quantity, deliveryDate, status } = props.order
  const { productImageUri, productTitle, productPrice } = product
  return (
    <ListItem avatar button onPress={() => { props.onPress(props.order) }}>
      <Left>
        <Thumbnail
          source={{ uri: productImageUri }}/>
      </Left>
      <Body>
        <Text style={styles.productTitle} numberOfLines={1}>{productTitle}</Text>
        <Text style={styles.invoiceNumber} note>{invoiceNumber}</Text>
        <Text style={styles.orderMeta} note>
          <Icon style={styles.icon} name={'ios-pricetags-outline'}/> ₱{roundToTwoFixedDecimalPlaces(productPrice)} {'  '}
          <Icon style={styles.icon} name={'ios-cube-outline'}/> {quantity} {quantity > 1 ? ' pcs' : ' pc'}
        </Text>
      </Body>
      <Right>
        <Text note>{getDateInWords(deliveryDate)}</Text>
        <Text note>{status}</Text>
      </Right>
    </ListItem>
  )
}

const styles = StyleSheet.create({
  productTitle: { marginBottom: 1.5 },
  invoiceNumber: { marginBottom: 7, fontWeight: '700', color: 'gray' },
  orderMeta: { lineHeight: 18, color: 'black', fontSize: 14 },
  icon: { fontSize: 17 }
})

export default OrdersListItem
