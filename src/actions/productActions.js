import firebase from '../common/firebase'
import { toastGenericErrorMsg } from '../common/helpers'

export const initiateProductAdd = () => ({
  type: 'INITIATE_PRODUCT_ADD'
})

export const addProduct = (product) => {
  return async (dispatch, getState) => {
    const payload = {
      ownerKey: getState().user.uid,
      productImageUri: 'https://firebasestorage.googleapis.com/v0/b/marketsense-b09f8.appspot.com/o/products%2Fp2.png?alt=media&token=f12dde5f-74c3-4fb0-9431-5f923b722a3c',
      ...product
    }
    try {
      await firebase.database().ref('/products').push(payload)
    } catch (e) {
      toastGenericErrorMsg()
    }
  }
}

export const editProduct = (product) => {
  return async (dispatch) => {
    dispatch({type: 'EDIT_PRODUCT', product: product})
  }
}

export const updateProduct = (product) => {
  return async (dispatch) => {
    const payload = {...product}
    delete payload.key
    delete payload.productOwner
    delete payload.ownerAvatar
    try {
      const productRef = await firebase.database().ref('/products')
      await productRef.child(product.key).update(payload)
    } catch (e) {
      toastGenericErrorMsg()
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
    dispatch({type: 'VIEW_PRODUCT_AVAILABILITY'})
  }
}

export const selectProduct = (product) => ({
  type: 'SELECT_PRODUCT',
  selectedProduct: product
})
