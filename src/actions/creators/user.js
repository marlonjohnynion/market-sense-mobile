import * as actions from '../types/userActionTypes'

export const loginSuccess = (values) => ({
  type: actions.LOGIN,
  email: values.email,
  uid: values.uid
})

export const loginFail = (error) => ({
  type: actions.LOGIN_FAILED,
  error: error
})

export const registerFail = (error) => ({
  type: actions.REGISTER_USER_FAILED,
  error: error
})
