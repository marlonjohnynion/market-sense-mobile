import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Button } from 'react-native'
import LoginConnected, { Login } from '../../src/containers/Login'
import LoginForm from '../../src/components/LoginForm'
import { authenticateUser } from '../../src/actions/userActions'

describe('<Login />', () => {
  let container, store, wrapper
  const initialState = {
    userActions: {
      authenticateUser: authenticateUser
    }
  }
  beforeEach(() => {
    store = configureStore()(initialState)
    container = shallow(<LoginConnected store={store}/>)
    wrapper = shallow(<Login
      userActions={initialState.userActions}/>)
  })

  it('renders the smart component', () => {
    expect(container).toHaveLength(1)
  })

  it('renders the component as expected', () => {
    expect(container).toMatchSnapshot()
  })

  it('renders the login form', () => {
    expect(wrapper.find(LoginForm)).toHaveLength(1)
  })
})
