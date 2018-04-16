import firebase from '../common/firebase'
import { toast } from '../common/helpers'
import { initializeListeners } from './listeners'
import { getFirebaseImageUrl } from './cameraActions'
import { startLoading, endLoading } from './creators/app'
import { loginSuccess } from './creators/user'

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
  const { email, password } = values
  if (!email || !password) {
    throw new Error('Please fill up email and password!')
  }
}

export const registerUser = values => {
  return async (dispatch, getState) => {
    try {
      dispatch(startLoading())
      values.ownerAvatar = await getFirebaseImageUrl(getState().image.chosenImage)
      validateUserRegistration(values)
      const { email, password, firstName, lastName, ownerAvatar } = values
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
      if (firebase.auth().currentUser) {
        const newUserId = String(firebase.auth().currentUser.uid)
        const userRef = await firebase.database().ref('/users').child(newUserId)
        await userRef.set({
          firstName: firstName,
          lastName: lastName,
          ownerAvatar: ownerAvatar
        })
        dispatch(endLoading())
        toast(`You're registered. Please login!`)
      }
    } catch (e) {
      dispatch(endLoading())
      toast(e.toString())
    }
  }
}

export const authenticateUser = (values) => {
  return async (dispatch, getState) => {
    try {
      const { email, password } = values
      validateUserLogin(values)
      dispatch(startLoading())
      await firebase
        .auth()
        .signInAndRetrieveDataWithEmailAndPassword(email, password)
      if (firebase.auth().currentUser) {
        values.uid = firebase.auth().currentUser.uid
        dispatch(loginSuccess(values))
        initializeListeners(dispatch, getState())
        dispatch(endLoading())
      }
    } catch (e) {
      dispatch(endLoading())
      toast('Wrong password/email combination')
    }
  }
}
