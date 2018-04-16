import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Content, Form, Item, Label, Input, Button } from 'native-base'
import { SafeAreaView } from 'react-navigation'
import { Image, Text, View, StyleSheet } from 'react-native'
import DatePicker from './DatePicker'
import OrderSummary from './OrderSummary'

const DeliveryDatePicker = (props) => {
  const { input, date, minDate, maxDate } = props
  return (
    <DatePicker onDateChange={input.onChange} selectedDate={date} minDate={minDate} maxDate={maxDate}/>
  )
}

const QuantityField = (props) => {
  return <Input onChange={props.input.onChange} defaultValue={String(props.defaultValue)}/>
}

const GenericField = (props) => {
  return <Input onChange={props.input.onChange} placeholder={props.placeholder}/>
}

const OrderForm = (props) => {
  const { deliveryDate } = props.orderData
  const { handleSubmit, submissionHandler, product, initialValues } = props
  return (
    <Content>
      <SafeAreaView>
        <Image source={require('../assets/images/market-colors.jpg')} style={styles.image}/>
        <View>
          <Form style={styles.form}>
            <Text style={styles.orderInformationLabel}>Order Information</Text>
            <Item fixedLabel>
              <Label style={styles.deliveryDateLabel}>Delivery Date</Label>
              <Field name='deliveryDate' component={DeliveryDatePicker} date={!deliveryDate ? product.minDeliveryDate : deliveryDate} minDate={product.minDeliveryDate} maxDate={product.maxDeliveryDate}/>
            </Item>
            <Item inlineLabel>
              <Label style={styles.quantityLabel}>Quantity</Label>
              <Field name='quantity' component={QuantityField} defaultValue={initialValues.quantity}/>
            </Item>
            <Text style={styles.deliveryInformationLabel}>Delivery Information</Text>
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
            <Text style={styles.orderSummaryLabel}>Order Summary</Text>
          </Form>
          <OrderSummary product={product} orderData={props.orderData}/>
          <Button full large success style={styles.completeOrderButton} onPress={handleSubmit(submissionHandler)}>
            <Text style={styles.completeOrderButtonText}>COMPLETE ORDER</Text>
          </Button>
        </View>
      </SafeAreaView>
    </Content>
  )
}

const styles = StyleSheet.create({
  orderInformationLabel: {fontSize: 24, marginTop: 15, marginLeft: 15, marginBottom: 10},
  deliveryDateLabel: { fontSize: 18 },
  quantityLabel: { fontSize: 18 },
  deliveryInformationLabel: {fontSize: 24, marginTop: 15, marginLeft: 15, marginBottom: 10},
  orderSummaryLabel: {fontSize: 24, marginTop: 15, marginLeft: 15, marginBottom: 10},
  completeOrderButtonText: {color: '#fff', fontSize: 20, fontWeight: 'bold'},
  completeOrderButton: {margin: 15, borderRadius: 4},
  image: {height: 100},
  form: {marginTop: 15}
})

export default reduxForm({ form: 'orderForm' })(OrderForm)
