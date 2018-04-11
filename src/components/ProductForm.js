import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Item, Label, Input, Button, Content } from 'native-base'
import { SafeAreaView } from 'react-navigation'
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native'
import DatePicker from './DatePicker'
import { getDateInWords } from '../common/helpers'

const DeliveryDatePicker = (props) => {
  const { input, date, minDate } = props
  return (
    <DatePicker onDateChange={input.onChange} selectedDate={date} minDate={minDate}/>
  )
}

const GenericField = (props) => {
  const { input, defaultValue } = props
  return <Input style={styles.input} onChange={input.onChange} placeholder={props.placeholder} defaultValue={defaultValue}/>
}

const productInformationFields = [
  { name: 'productTitle', title: 'Title' },
  { name: 'productCategory', title: 'Category' },
  { name: 'productDescription', title: 'Description' },
  { name: 'productLocation', title: 'Location' }
]

const inventoryInformationFields = [
  { name: 'lotSize', title: 'Lot Size' },
  { name: 'productPrice', title: 'Price per Lot' },
  { name: 'maxLots', title: 'Maximum Number of Lots Offered' }
]

const GeneratedGenericFields = ({ fields, initialValues }) => {
  return fields.map(field => {
    const defaultValue = initialValues && initialValues[field.name] ? initialValues[field.name] : undefined
    return (
      <View key={field.name}>
        <Item stackedLabel>
          <Label>{field.title}</Label>
          <Field name={field.name} component={GenericField} defaultValue={defaultValue}/>
        </Item>
      </View>
    )
  }
  )
}

const ProductForm = props => {
  const { handleSubmit, actions, formValues, initialValues } = props
  const productImage = initialValues && initialValues.productImageUri ? {uri: initialValues.productImageUri} : require('../assets/images/checklist.jpg')
  const { minDeliveryDate, maxDeliveryDate } = formValues
  return (
    <ScrollView>
      <SafeAreaView>
        <Image source={productImage} style={styles.image}/>
        <Content>
          <Form style={styles.form}>
            <Text style={styles.mainHeading}>Product Information</Text>
            <GeneratedGenericFields fields={productInformationFields} initialValues={initialValues} />
            <Text style={styles.mainHeading}>Inventory Information</Text>
            <GeneratedGenericFields fields={inventoryInformationFields} initialValues={initialValues}/>

            <Text style={styles.mainHeading}>Delivery Information</Text>
            <Item stackedLabel style={styles.datePicker}>
              <Label>Availability</Label>
              <Field name='minDeliveryDate' component={DeliveryDatePicker}
                     date={!minDeliveryDate ? new Date() : minDeliveryDate} minDate={getDateInWords(new Date())}/>
            </Item>
            <Item stackedLabel>
              <Label>Expiry </Label>
              <Field name='maxDeliveryDate' date={!maxDeliveryDate ? new Date() : maxDeliveryDate}
                     component={DeliveryDatePicker} minDate={minDeliveryDate}/>
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
