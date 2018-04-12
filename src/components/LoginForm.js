import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Image, StyleSheet } from 'react-native'
import { Form, Item, Input, Label, Button, Text, Container } from 'native-base'

export const emailField = (props) => {
  const {input} = props
  return <Input onChangeText={input.onChange}/>
}

export const passwordField = (props) => {
  const {input} = props
  return <Input onChangeText={input.onChange} secureTextEntry={true}/>
}

export const LoginForm = (props) => {
  const { handleSubmit, loginHandler } = props
  return (
    <Container>
      <Image source={require('../assets/images/market.jpeg')} style={styles.image} resizeMethod={'scale'}/>
      <Container style={styles.container}>
        <Form>
          <Item inlineLabel>
            <Label>Email</Label>
            <Field name='email' component={emailField}/>
          </Item>
          <Item inlineLabel last>
            <Label>Password</Label>
            <Field name='password' component={passwordField}/>
          </Item>
        </Form>
        <Button block light onPress={handleSubmit(loginHandler)} style={styles.button}>
          <Text>LOGIN</Text>
        </Button>
      </Container>
    </Container>

  )
}

const styles = StyleSheet.create({
  image: {height: 200, width: null},
  container: {marginTop: 20},
  button: {marginTop: 20}
})

export default reduxForm({form: 'loginForm'})(LoginForm)
