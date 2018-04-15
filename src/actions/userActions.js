import * as actions from './types/userActionTypes'
import firebase from '../common/firebase'
import { toast } from '../common/helpers'
import { initializeListeners } from './listeners'
import { getFirebaseImageUrl } from './cameraActions'

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
  const { email, password, emailRepeat, firstName, lastName, passwordRepeat, ownerAvatar } = values
  if (!email || !password || !firstName || !lastName || !emailRepeat || !passwordRepeat) {
    throw new Error('Please fill up all the fields!')
  }
  if (password !== passwordRepeat) {
    throw new Error('Passwords do not match!')
  }
  if (email !== emailRepeat) {
    throw new Error('Emails do not match!')
  }
  if (!ownerAvatar) {
    throw new Error('Please select your profile image!')
  }
}

export const validateUserLogin = values => {
  const {email, password} = values
  if (!email || !password) {
    throw new Error('Please fill up email and password!')
  }
}

export const registerUser = values => {
  return async (dispatch, getState) => {
    try {
      values.ownerAvatar = await getFirebaseImageUrl(getState().image.chosenImage)
      validateUserRegistration(values)
      const { email, password, firstName, lastName, ownerAvatar } = values
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
      if (firebase.auth().currentUser) {
        await firebase.database().ref('/users').push({
          firstName: firstName,
          lastName: lastName,
          ownerAvatar: ownerAvatar
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
