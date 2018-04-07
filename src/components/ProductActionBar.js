import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Grid, Col, Button } from 'native-base'

const ProductActionBar = ({product}) => {
  return (
    <View style={styles.productBottomBar}>
      <Grid>
        <Col style={styles.left}>
          <ProductPrice price={product.productPrice} />
          <Text>Free Delivery</Text>
        </Col>
        <Col style={styles.right}>
          <ActionButton text={'CHECK AVAILABILITY'}/>
        </Col>
      </Grid>
    </View>
  )
}

export const ProductPrice = ({price}) => {
  return (
    <Text style={styles.productPrice}>
      {price}
    </Text>
  )
}

export const ProductRating = ({rating}) => {
  return (
    <Text style={styles.productRating}>
      {rating}
    </Text>
  )
}

export const ActionButton = ({text}) => {
  return (
    <Button block success>
      <Text>{text}</Text>
    </Button>
  )
}

const styles = StyleSheet.create({
  productPrice: {fontSize: 16, paddingTop: 6, fontWeight: '800'},
  productRating: {fontSize: 16, fontWeight: '800', color: 'green'},
  productBottomBar: {
    height: 75,
    paddingTop: 15,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderTopWidth: 0.3,
    marginTop: 20
  },
  right: {flex: 0.6},
  left: {flex: 0.6}
})

export default ProductActionBar
