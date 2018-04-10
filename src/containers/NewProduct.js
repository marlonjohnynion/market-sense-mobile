import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NewProductForm from '../components/NewProductForm'
import { formValueSelector } from 'redux-form'
import { addProduct } from '../actions/productActions'

const NewProduct = props => {
  const { actions, formValues } = props
  return (
    <View>
      <NewProductForm actions={actions} formValues={formValues}/>
    </View>
  )
}

const selector = formValueSelector('productForm')

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ addProduct }, dispatch)
})

const mapStateToProps = state => ({
  formValues: {
    minDeliveryDate: selector(state, 'minDeliveryDate'),
    maxDeliveryDate: selector(state, 'maxDeliveryDate')
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct)
