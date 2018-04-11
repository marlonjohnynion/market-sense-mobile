import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NewProductForm from '../components/ProductForm'
import { formValueSelector } from 'redux-form'
import { addProduct } from '../actions/productActions'

const NewProduct = props => {
  const { actions, formValues, initialValues } = props
  return (
    <View>
      <NewProductForm actions={actions} formValues={formValues} initialValues={initialValues}/>
    </View>
  )
}

const selector = formValueSelector('productForm')

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ submitAction: addProduct }, dispatch)
})

const mapStateToProps = state => ({
  formValues: {
    minDeliveryDate: selector(state, 'minDeliveryDate'),
    maxDeliveryDate: selector(state, 'maxDeliveryDate')
  },
  initialValues: {
    minDeliveryDate: new Date(),
    maxDeliveryDate: new Date()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct)
