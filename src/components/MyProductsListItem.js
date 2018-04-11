import React from 'react'
import { ListItem, Left, Thumbnail, Body, Text, Right } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet } from 'react-native'
import { roundToTwoFixedDecimalPlaces } from '../common/helpers'

const MyProductsListItem = props => {
  const { product, actions } = props
  const { productImageUri, productTitle, productPrice, lotSize, productDescription, productCategory } = product
  return (
    <ListItem avatar button onPress={() => { actions.viewProduct(product) }}>
      <Left>
        <Thumbnail
          source={{ uri: productImageUri }}/>
      </Left>
      <Body>
        <Text style={styles.productTitle} numberOfLines={1}>{productTitle}</Text>
        <Text style={styles.productDescription} numberOfLines={1} note>{productDescription}</Text>
        <Text style={styles.productMeta} note>
          <Icon style={styles.icon} name={'ios-pricetags-outline'}/> ₱{roundToTwoFixedDecimalPlaces(productPrice)} {'  '}
          <Icon style={styles.icon} name={'ios-cube-outline'}/> {lotSize}
        </Text>
      </Body>
      <Right>
        <Text note>{productCategory}</Text>
      </Right>
    </ListItem>
  )
}

const styles = StyleSheet.create({
  productTitle: { marginBottom: 1.5 },
  productDescription: { marginBottom: 7, fontWeight: '700', color: 'gray' },
  productMeta: { lineHeight: 18, color: 'black', fontSize: 14 },
  icon: { fontSize: 17 }
})

export default MyProductsListItem
