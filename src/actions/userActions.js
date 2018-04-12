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

export const validateUserRegistration = values => {
  const { email, password, emailRepeat, firstName, lastName, passwordRepeat } = values
  if (!email || !password || !firstName || !lastName || !emailRepeat || !passwordRepeat) {
    throw new Error('Please fill up all the fields!')
  }
  if (password !== passwordRepeat) {
    throw new Error('Passwords do not match!')
  }
  if (email !== emailRepeat) {
    throw new Error('Emails do not match!')
  }
}

export const validateUserLogin = values => {
  const {email, password} = values
  if (!email || !password) {
    throw new Error('Please fill up email and password!')
  }
}

export const registerUser = values => {
  return async (dispatch) => {
    try {
      validateUserRegistration(values)
      const { email, password, firstName, lastName } = values
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
      if (firebase.auth().currentUser) {
        await firebase.database().ref('/users').set({
          firstName: firstName,
          lastName: lastName,
          ownerAvatar: 'https://pixel.nymag.com/imgs/daily/selectall/2018/03/05/05-patrick.w710.h473.jpg'
        })
        toast(`You're registered. Please login!`)
      }
    } catch (e) {
      toast(e.toString())
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
