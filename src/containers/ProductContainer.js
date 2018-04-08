import React from 'react'
import { View } from 'react-native'
import ProductView from '../components/ProductView'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { checkProductAvailability } from '../actions/productActions'

export const ProductContainer = (props) => {
  return (
    <View>
      <ProductView product={props.product} actions={props.actions}/>
    </View>
  )
}

const mapStateToProps = (state) => ({
  product: state.products.selectedProduct
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ checkProductAvailability }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
