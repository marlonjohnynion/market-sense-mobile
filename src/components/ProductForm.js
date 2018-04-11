import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Item, Label, Input, Button, InputGroup, Content } from 'native-base'
import { SafeAreaView } from 'react-navigation'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'
import DatePicker from './DatePicker'
import { getDateInWords } from '../common/helpers'

const DeliveryDatePicker = (props) => {
  const { input, date, minDate } = props
  return (
    <DatePicker onDateChange={input.onChange} selectedDate={date} minDate={minDate}/>
  )
}

const GenericField = (props) => {
  const {input, defaultValue} = props
  return <Input style={styles.input} onChange={input.onChange} placeholder={props.placeholder}/>
}

const ProductForm = props => {
  const { handleSubmit, actions, formValues } = props
  console.log(formValues)
  const { minDeliveryDate, maxDeliveryDate } = formValues
  return (
    <ScrollView>
      <SafeAreaView>
        <Image source={require('../assets/images/checklist.jpg')} style={styles.image}/>
        <Content>
          <Form style={styles.form}>
            <Text style={styles.mainHeading}>Product Information</Text>
            <Item stackedLabel>
              <Label>Title</Label>
              <Field name='productTitle' component={GenericField}/>
            </Item>
            <Item stackedLabel>
              <Label>Category</Label>
              <Field name='productCategory' component={GenericField}/>
            </Item>
            <Item stackedLabel>
              <Label>Description</Label>
              <Field name='productDescription' component={GenericField}/>
            </Item>
            <Item stackedLabel>
              <Label>Location</Label>
              <Field name='productLocation' component={GenericField}/>
            </Item>
            <Text style={styles.mainHeading}>Inventory Information</Text>
            <Item stackedLabel>
              <Label>Lot Size</Label>
              <Field name='lotSize' component={GenericField}/>
            </Item>
            <Item stackedLabel>
              <Label>Price per Lot</Label>
              <Field name='productPrice' component={GenericField}/>
            </Item>
            <Item stackedLabel>
              <Label>Maximum Lots Offered</Label>
              <Field name='maxLots' component={GenericField}/>
            </Item>

            <Text style={styles.mainHeading}>Delivery Information</Text>
            <Item stackedLabel style={styles.datePicker}>
              <Label>Availability</Label>
              <Field name='minDeliveryDate' component={DeliveryDatePicker} date={!minDeliveryDate ? new Date() : minDeliveryDate} minDate={getDateInWords(new Date())}/>
            </Item>
            <Item stackedLabel>
              <Label>Expiry </Label>
              <Field name='maxDeliveryDate' date={!maxDeliveryDate ? new Date() : maxDeliveryDate} component={DeliveryDatePicker} />
            </Item>
            <Button block success style={styles.button} onPress={handleSubmit(actions.submitAction)}>
              <Text style={styles.buttonText}>Submit Product</Text>
            </Button>
          </Form>
        </Content>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  button: {
    margin: 15,
    height: 50
  },
  form: {
    marginTop: 15
  },
  image: {
    height: 100,
    width: null
  },
  input: {
    fontSize: 14
  },
  mainHeading: {
    fontSize: 24, marginTop: 15, marginLeft: 15, marginBottom: 1
  },
  datePicker: {
    marginTop: 25,
    marginBottom: 20
  }
})

export default reduxForm({ form: 'productForm' })(ProductForm)
