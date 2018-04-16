import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from '../actions/userActions'
import LoginForm from '../components/LoginForm'

export const Login = ({ state, userActions }) => {
  return <LoginForm loginHandler={userActions.authenticateUser}/>
}

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
})

export default connect(null, mapDispatchToProps)(Login)
