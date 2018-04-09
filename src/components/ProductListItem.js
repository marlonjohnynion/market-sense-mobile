import React from 'react'
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { roundToTwoFixedDecimalPlaces } from '../common/helpers'

const ProductListItem = ({ product, selectProduct }) => {
  return (
    <TouchableWithoutFeedback onPress={() => { selectProduct(product) }}>
      <View style={styles.viewStyle}>
        <Image source={{ uri: product.productImageUri }} style={styles.productImage}/>
        <Text style={styles.productLocation}>{product.productLocation}</Text>
        <Text style={styles.productTitle}>{product.productTitle}</Text>
        <Text style={styles.productPrice}>₱{roundToTwoFixedDecimalPlaces(product.productPrice)}</Text>
        <Text style={styles.productDescription} numberOfLines={3}>{product.productDescription}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  productImage: { height: 200, width: null, borderRadius: 3 },
  productLocation: { fontSize: 14, marginTop: 8, fontWeight: 'bold' },
  productTitle: { fontSize: 24, fontWeight: 'bold' },
  productPrice: { fontSize: 18, fontWeight: '200', marginTop: 3 },
  productDescription: { fontSize: 16, marginTop: 8 },
  viewStyle: { padding: 20 }
})

export default ProductListItem
