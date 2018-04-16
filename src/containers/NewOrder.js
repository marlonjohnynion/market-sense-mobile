import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import OrderForm from '../components/OrderForm'
import { addOrder } from '../actions/orderActions'

export const NewOrder = ({ state, orderData, actions, selectedProduct, initialValues }) => {
  return <OrderForm initialValues={initialValues} orderData={orderData} submissionHandler={actions.addOrder} product={selectedProduct}/>
}

const selector = formValueSelector('orderForm')

const mapStateToProps = (state) => ({
  orderData: {
    deliveryDate: selector(state, 'deliveryDate'),
    quantity: selector(state, 'quantity')
  },
  initialValues: {
    quantity: 1,
    deliveryDate: state.products.selectedProduct.minDeliveryDate
  },
  selectedProduct: state.products.selectedProduct
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ addOrder }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder)
