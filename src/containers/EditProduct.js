import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EditProductForm from '../components/ProductForm'
import { formValueSelector } from 'redux-form'
import { updateProduct } from '../actions/productActions'

const NewProduct = props => {
  const { actions, formValues, initialValues } = props
  return (
    <View>
      <EditProductForm actions={actions} formValues={formValues} initialValues={initialValues}/>
    </View>
  )
}

const selector = formValueSelector('productForm')

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ submitAction: updateProduct }, dispatch)
})

const mapStateToProps = state => ({
  formValues: {
    minDeliveryDate: selector(state, 'minDeliveryDate'),
    maxDeliveryDate: selector(state, 'maxDeliveryDate')
  },
  initialValues: {
    ...state.products.editedProduct
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct)
