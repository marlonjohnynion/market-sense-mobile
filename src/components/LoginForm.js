import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Image } from 'react-native'
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
      <Image source={require('../assets/images/market.jpeg')} style={{height: 200, width: null}} resizeMethod={'scale'}/>
      <Container style={{marginTop: 20}}>
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
        <Button block light onPress={handleSubmit(loginHandler)} style={{marginTop: 20}}>
          <Text>LOGIN</Text>
        </Button>
      </Container>
    </Container>

  )
}

export default reduxForm({form: 'loginForm'})(LoginForm)
