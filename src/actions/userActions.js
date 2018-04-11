import * as actions from './types/userActionTypes'
import firebase from '../common/firebase'
import { toast } from '../common/helpers'
import { initializeListeners } from './listeners'

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
  return async (dispatch, getState) => {
    const { email, password } = values
    try {
      await firebase
        .auth()
        .signInAndRetrieveDataWithEmailAndPassword(email, password)
      if (firebase.auth().currentUser) {
        values.uid = firebase.auth().currentUser.uid
        dispatch(loginSuccess(values))
        initializeListeners(dispatch, getState())
      }
    } catch (e) {
      toast('Wrong password/email combination')
    }
  }
}
