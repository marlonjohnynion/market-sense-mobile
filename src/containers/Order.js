import React from 'react'
import {
  Container,
  Content
} from 'native-base'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import OrderForm from '../components/OrderForm'

export const Order = ({ state, formValues }) => {
  return (
    <Container>
      <Content>
        <OrderForm formValues={formValues}/>
      </Content>
    </Container>
  )
}

const selector = formValueSelector('orderForm')

const mapStateToProps = (state) => ({
  formValues: {
    deliveryDate: selector(state, 'deliveryDate')
  }
})

export default connect(mapStateToProps)(Order)
