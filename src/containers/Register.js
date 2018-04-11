import React from 'react'
import { Container } from 'native-base'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RegisterForm from '../components/RegisterForm'
import { registerUser } from '../actions/userActions'

export const Register = ({ state, actions }) => {
  return (
    <Container>
      <RegisterForm actions={actions}/>
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ registerUser }, dispatch)
})

export default connect(null, mapDispatchToProps)(Register)
