import firebase from '../common/firebase'
import { toast, toastGenericErrorMsg, isNumber } from '../common/helpers'

export const initiateProductAdd = () => ({
  type: 'INITIATE_PRODUCT_ADD'
})

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
    maxDeliveryDate
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
}

export const addProduct = (product) => {
  return async (dispatch, getState) => {
    try {
      validateProductBeforeSubmission(product)
      const payload = {
        ownerKey: getState().user.uid,
        productImageUri: 'https://firebasestorage.googleapis.com/v0/b/marketsense-b09f8.appspot.com/o/products%2Fp2.png?alt=media&token=f12dde5f-74c3-4fb0-9431-5f923b722a3c',
        ...product
      }
      await firebase.database().ref('/products').push(payload)
      toast('Product has been listed!')
    } catch (e) {
      toast(e)
    }
  }
}

export const editProduct = (product) => {
  return async (dispatch) => {
    dispatch({ type: 'EDIT_PRODUCT', product: product })
  }
}

export const updateProduct = (product) => {
  return async (dispatch) => {
    try {
      validateProductBeforeSubmission(product)
      const payload = { ...product }
      delete payload.key
      delete payload.productOwner
      delete payload.ownerAvatar
      const productRef = await firebase.database().ref('/products')
      await productRef.child(product.key).update(payload)
      toast('Product has been updated!')
    } catch (e) {
      toast(e)
    }
  }
}

export const deleteProduct = (product) => {
  return async (dispatch) => {
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
    dispatch({ type: 'VIEW_PRODUCT_AVAILABILITY' })
  }
}

export const selectProduct = (product) => ({
  type: 'SELECT_PRODUCT',
  selectedProduct: product
})
