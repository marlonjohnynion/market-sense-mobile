import firebase from '../common/firebase'
import { toast, toastGenericErrorMsg, isNumber } from '../common/helpers'
import { getFirebaseImageUrl } from './cameraActions'
import { startLoading, endLoading } from './creators/app'
import { clearTakenImage } from './creators/image'
import {
  changeSearchTerm,
  productFilter,
  viewProductAvailability
} from './creators/product'

const validateProductBeforeSubmission = (product) => {
  const {
    productTitle,
    productCategory,
    productDescription,
    productLocation,
    lotSize,
    maxLots,
    productPrice,
    minDeliveryDate,
    maxDeliveryDate,
    productImageUri
  } = product
  if (!productTitle || !productCategory || !productDescription || !productLocation || !lotSize ||
    !maxLots || !productPrice || !minDeliveryDate || !maxDeliveryDate) {
    throw new Error('Please fill up all the fields!')
  }
  if (new Date(minDeliveryDate) > new Date(maxDeliveryDate)) {
    throw new Error('Min delivery date is greater than max delivery date!')
  }
  if (!isNumber(maxLots) || parseInt(maxLots) <= 0) {
    throw new Error('Max lot should be a valid number!')
  }
  if (!isNumber(lotSize) || parseInt(lotSize) <= 0) {
    throw new Error('Lot size should be a valid number!')
  }
  if (!isNumber(productPrice) || parseInt(productPrice) <= 0) {
    throw new Error('Product price should be a valid number!')
  }
  if (!productImageUri) {
    throw new Error('Please select a product image!')
  }
}

export const addProduct = (product) => {
  return async (dispatch, getState) => {
    try {
      dispatch(startLoading())
      product.productImageUri = await getFirebaseImageUrl(getState().image.chosenImage)
      validateProductBeforeSubmission(product)
      const payload = {
        ownerKey: getState().user.uid,
        ...product
      }
      await firebase.database().ref('/products').push(payload)
      dispatch(clearTakenImage())
      dispatch(endLoading())
      toast('Product has been listed!')
    } catch (e) {
      toast(e)
    }
  }
}

export const updateProduct = (product) => {
  return async (dispatch, getState) => {
    try {
      const newProductImage = getState().image.chosenImage
      if (newProductImage) {
        product.productImageUri = await getFirebaseImageUrl(newProductImage)
      }
      validateProductBeforeSubmission(product)
      const payload = { ...product }
      delete payload.key
      delete payload.productOwner
      delete payload.ownerAvatar
      const productRef = await firebase.database().ref('/products')
      await productRef.child(product.key).update(payload)
      dispatch(clearTakenImage())
      toast('Product has been updated!')
    } catch (e) {
      toast(e)
    }
  }
}

export const searchTermChange = (value) => {
  return (dispatch) => {
    dispatch(changeSearchTerm(value))
  }
}

export const deleteProduct = (product) => {
  return async () => {
    try {
      const productRef = await firebase.database().ref('/products')
      await productRef.child(product.key).remove()
    } catch (e) {
      toastGenericErrorMsg()
    }
  }
}

export const checkProductAvailability = () => {
  return async (dispatch) => {
    dispatch(viewProductAvailability())
  }
}

export const filterProducts = () => {
  return (dispatch, getState) => {
    dispatch(productFilter(getState().products.searchTerm))
  }
}
