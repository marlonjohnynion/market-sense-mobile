import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Item, Input, Label, Button, Text, Container } from 'native-base'

const emailField = (props) => {
  const {input} = props
  return <Input onChangeText={input.onChange}/>
}

const passwordField = (props) => {
  const {input} = props
  return <Input onChangeText={input.onChange} secureTextEntry={true}/>
}

const LoginForm = (props) => {
  const { handleSubmit, loginHandler } = props
  return (
    <Container>
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
      <Button block light onPress={handleSubmit(loginHandler)}>
        <Text>LOGIN</Text>
      </Button>
    </Container>

  )
}

export default reduxForm({form: 'loginForm'})(LoginForm)
