import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NewProductForm from '../components/ProductForm'
import { formValueSelector } from 'redux-form'
import { addProduct } from '../actions/productActions'
import { chooseImageOrigin } from '../actions/cameraActions'

const NewProduct = props => {
  const { actions, formValues, initialValues } = props
  return <NewProductForm actions={actions} formValues={formValues} initialValues={initialValues}/>
}

const selector = formValueSelector('productForm')

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ submitAction: addProduct, chooseImageOrigin }, dispatch)
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
