import React from 'react'
import {
  Container,
  Header,
  Content
} from 'native-base'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from '../actions/userActions'
import LoginForm from '../components/LoginForm'

export const Login = ({state, userActions}) => {
  return (
    <Container>
      <Header/>
      <Content>
        <LoginForm loginHandler={userActions.authenticateUser}/>
      </Content>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
