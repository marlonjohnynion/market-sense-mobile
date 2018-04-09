import * as actions from './types/userActionTypes'
import { loadProducts } from './productActions'
import firebase from '../common/firebase'
import { loadOrders } from './orderActions'

export const loginSuccess = (values) => ({
  type: actions.LOGIN,
  email: values.email
})

export const loginFail = (error) => ({
  type: actions.LOGIN_FAILED,
  error: error
})

export const registerFail = (error) => ({
  type: actions.REGISTER_USER_FAILED,
  error: error
})

export const registerUser = (email, password) => {
  return async (dispatch) => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
      // if user is registered, we will login automatically
      if (firebase.auth().currentUser) {
        dispatch(loginSuccess(email, password))
      }
    } catch (e) {
      dispatch(registerFail(e))
    }
  }
}

export const authenticateUser = (values) => {
  return async (dispatch) => {
    const {email, password} = values
    try {
      await firebase
        .auth()
        .signInAndRetrieveDataWithEmailAndPassword(email, password)
      if (firebase.auth().currentUser) {
        dispatch(loadProducts())
        dispatch(loadOrders())
        dispatch(loginSuccess(values))
      }
    } catch (e) {
      dispatch(loginFail(e))
    }
  }
}
