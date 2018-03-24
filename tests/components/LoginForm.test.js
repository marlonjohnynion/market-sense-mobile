import React from 'react'
import { shallow } from 'enzyme'
import LoginForm, { emailField } from '../../src/components/LoginForm'
import { authenticateUser } from '../../src/actions/userActions'
import { Form, Item } from 'native-base'

describe('<LoginForm />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<LoginForm loginHandler={authenticateUser}/>)
  })

  it('renders the component', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders the component as expected', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
