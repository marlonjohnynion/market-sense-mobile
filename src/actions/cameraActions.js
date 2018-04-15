import { ImagePicker } from 'expo'
import firebase from '../common/firebase'
import { ActionSheet } from 'native-base'
import { toast } from '../common/helpers'

export const pickImage = () => {
  return async (dispatch) => {
    const pickedImage = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: false,
      aspect: [4, 3]
    })
    dispatch({ type: 'IMAGE_CHOSEN', image: pickedImage })
  }
}

export const takeImage = () => {
  return async (dispatch) => {
    const takenImage = await ImagePicker.launchCameraAsync({
      base64: true,
      allowsEditing: false,
      aspect: [4, 3]
    })
    dispatch({ type: 'IMAGE_CHOSEN', image: takenImage })
  }
}

export const getFirebaseImageUrl = async (pickedImage) => {
  try {
    const imageUri = pickedImage.uri
    const imageTitle = imageUri.split('/').pop()
    const image = await fetch(imageUri)
    const imageBlob = await image.blob()
    const storageRef = await firebase.storage().ref('/products')
    const imageRef = storageRef.child(imageTitle)
    const result = await imageRef.put(imageBlob)
    return result.downloadURL
  } catch (e) {
    toast(e)
  }
}

export const chooseImageOrigin = () => {
  return async (dispatch) => {
    const actions = ['Take Picture', 'Choose Image', 'Cancel']
    const cancelIndex = 2
    ActionSheet.show(
      {
        options: actions,
        cancelButtonIndex: cancelIndex,
        title: 'Upload Picture'
      },
      buttonIndex => {
        const status = actions[buttonIndex]
        if (status === actions[0]) {
          dispatch(takeImage())
        } else if (status === actions[1]) {
          dispatch(pickImage())
        }
      }
    )
  }
}