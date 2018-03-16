import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const ProductListView = ({product}) => {
  return (
    <View style={{padding: 20}}>
      <Image source={{uri: product.productImageUri}} style={styles.productImage} />
      <Text style={styles.productLocation}>{product.productLocation}</Text>
      <Text style={styles.productTitle}>{product.productTitle}</Text>
      <Text style={styles.productPrice}>{product.productPrice}</Text>
      <Text style={styles.productDescription}>{product.productDescription}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  productImage: {height: 200, width: null, borderRadius: 3},
  productLocation: {fontSize: 14, marginTop: 8, fontWeight: 'bold'},
  productTitle: {fontSize: 24, fontWeight: 'bold'},
  productPrice: {fontSize: 18, fontWeight: '200', marginTop: 3},
  productDescription: {fontSize: 16, marginTop: 8}

})

export default ProductListView
