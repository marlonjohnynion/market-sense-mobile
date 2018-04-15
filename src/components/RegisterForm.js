import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Image, StyleSheet, View, ScrollView } from 'react-native'
import { Form, Item, Input, Label, Button, Text, Container } from 'native-base'

const GenericField = (props) => {
  const { input, defaultValue } = props
  return <Input style={styles.input} onChange={input.onChange} placeholder={props.placeholder} defaultValue={defaultValue}/>
}

const registrationFields = [
  { name: 'firstName', title: 'First Name' },
  { name: 'lastName', title: 'Last Name' },
  { name: 'email', title: 'Email Address' },
  { name: 'emailRepeat', title: 'Confirm Email' }
]

const GeneratedGenericFields = ({ fields, initialValues }) => {
  return fields.map(field => {
    return (
      <View key={field.name}>
        <Item stackedLabel>
          <Label>{field.title}</Label>
          <Field name={field.name} component={GenericField}/>
        </Item>
      </View>
    )
  })
}

export const passwordField = (props) => {
  const { input } = props
  return <Input onChangeText={input.onChange} secureTextEntry={true}/>
}

export const RegisterForm = (props) => {
  const { handleSubmit, actions } = props
  return (
    <Container>
      <Image source={require('../assets/images/keyboard.jpeg')} style={styles.image}
        resizeMethod={'scale'}/>
      <ScrollView style={styles.scrollView}>

        <Form style={styles.form}>
          <Text style={styles.mainHeading}>Register</Text>
          <Text style={styles.subHeading}>Fill up the form to complete registration.</Text>
          <Button style={styles.button} onPress={actions.chooseImageOrigin} block danger>
            <Text style={styles.buttonText}>Choose Avatar</Text>
          </Button>
          <GeneratedGenericFields fields={registrationFields }/>
          <Item stackedLabel>
            <Label>Password</Label>
            <Field name='password' component={passwordField}/>
          </Item>
          <Item stackedLabel>
            <Label>Repeat Password</Label>
            <Field name='passwordRepeat' component={passwordField}/>
          </Item>
        </Form>



        <Button style={styles.button} onPress={handleSubmit(actions.registerUser)} block success>
          <Text style={styles.buttonText}>Register</Text>
        </Button>
      </ScrollView>
    </Container>

  )
}

const styles = StyleSheet.create({
  scrollView: { marginTop: 20 },
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
  input: {
    fontSize: 14
  },
  mainHeading: {
    fontSize: 36, marginLeft: 15, marginBottom: 8
  },
  subHeading: {
    fontSize: 16, marginLeft: 15, marginBottom: 15
  },
  image: {
    height: 150, width: null
  }
})

export default reduxForm({ form: 'registerForm' })(RegisterForm)
