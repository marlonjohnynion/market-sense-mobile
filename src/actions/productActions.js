import firebase from '../common/firebase'
import { toastGenericErrorMsg } from '../common/helpers'

export const loadProducts = () => {
  return async (dispatch) => {
    try {
      const products = []
      const data = await firebase.database().ref('/products').once('value')
      for (const [key, resData] of Object.entries(data.val())) {
        const product = {
          key: key,
          ...resData
        }
        let user = await firebase.database().ref('/users')
        user = await user.orderByKey().equalTo(product.ownerKey).once('value')
        user = user.val()[product.ownerKey]
        product.productOwner = user.name
        product.ownerAvatar = user.avatar
        products.push(product)
      }
      dispatch({
        type: 'LOAD_PRODUCTS',
        products: products
      })
      dispatch({
        type: 'SHOW_PRODUCTS'
      })
    } catch (e) {
      toastGenericErrorMsg()
    }
  }
}

export const initiateProductAdd = () => ({
  type: 'INITIATE_PRODUCT_ADD'
})

export const addProduct = (product) => {
  return async (dispatch, getState) => {
    const payload = {
      ownerKey: 'Bkca5APqUbTcHFRjuqStnu9Mlph1',
      productImageUri: 'https://firebasestorage.googleapis.com/v0/b/marketsense-b09f8.appspot.com/o/products%2Fp2.png?alt=media&token=f12dde5f-74c3-4fb0-9431-5f923b722a3c',
      ...product
    }
    console.log('PRODUCT PAYLOAD', payload)
    try {
      await firebase.database().ref('/products').push(payload)
      // dispatch({ type: 'ADD_PRODUCT', product: product })
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
    try {
      const productRef = await firebase.database().ref('/products')
      await productRef.child(product.key).update(payload)
      dispatch({type: 'UPDATE_PRODUCT', product: product})
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
      dispatch({type: 'DELETE_PRODUCT', product: product})
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
