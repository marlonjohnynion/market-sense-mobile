import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Container, Form, Item, Label, Header, Input, Icon, Button } from 'native-base'
import { Image, Text } from 'react-native'
import DatePicker from './DatePicker'

const DeliveryDatePicker = (props) => {
  const { input, date } = props
  return (
    <DatePicker onDateChange={input.onChange} selectedDate={date}/>
  )
}

const QuantityField = (props) => {
  return <Input onChange={props.input.onChange} value={'1'}/>
}

const GenericField = (props) => {
  return <Input onChange={props.input.onChange} placeholder={props.placeholder}/>
}

const OrderForm = (props) => {
  const { deliveryDate } = props.formValues
  return (
    <Container>
      <Image source={require('../assets/images/market-colors.jpg')} style={{height: 100}}/>
      <Form style={{marginTop: 15}}>
        <Text style={{fontSize: 24, marginTop: 15, marginLeft: 15, marginBottom: 10}}>Order Information</Text>
        <Item fixedLabel>
          <Label style={{ fontSize: 18 }}>Delivery Date</Label>
          <Field name='deliveryDate' component={DeliveryDatePicker} date={!deliveryDate ? new Date() : deliveryDate}/>
        </Item>
        <Item inlineLabel>
          <Label style={{ fontSize: 18 }}>Quantity</Label>
          <Field name='quantity' component={QuantityField}/>
        </Item>
        <Text style={{fontSize: 24, marginTop: 15, marginLeft: 15, marginBottom: 10}}>Delivery Information</Text>
        <Item>
          <Field name='deliveryAddressLine1' component={GenericField} placeholder='Address Line 1'/>
        </Item>
        <Item>
          <Field name='deliveryAddressLine2' component={GenericField} placeholder='Address Line 2'/>
        </Item>
        <Item>
          <Field name='city' component={GenericField} placeholder='City'/>
        </Item>
        <Item>
          <Field name='province' component={GenericField} placeholder='Province'/>
        </Item>
        <Item>
          <Field name='contact' component={GenericField} placeholder='Contact Number'/>
        </Item>
        <Button full large success style={{margin: 15, borderRadius: 4}}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>COMPLETE ORDER</Text>
        </Button>
      </Form>
    </Container>
  )
}

export default reduxForm({ form: 'orderForm' })(OrderForm)
