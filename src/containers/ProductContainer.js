import React from 'react'
import { View } from 'react-native'
import ProductView from '../components/ProductView'
import { connect } from 'react-redux'

export const ProductContainer = ({product}) => {
  return (
    <View>
      <ProductView product={product} />
    </View>
  )
}

const mapStateToProps = (state) => ({
  product: state.products.selectedProduct
})

export default connect(mapStateToProps)(ProductContainer)
