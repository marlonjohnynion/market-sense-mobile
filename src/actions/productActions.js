import firebase from '../common/firebase'

export const loadProducts = () => {
  return async (dispatch) => {
    const products = []
    const data = await firebase.database().ref('/products').once('value')
    data.forEach((child) => {
      products.push({
        key: child.key,
        ...child.val()
      })
    })
    dispatch({
      type: 'LOAD_PRODUCTS',
      products: products
    })
    dispatch({
      type: 'SHOW_PRODUCTS'
    })
  }
}

export const addProduct = (product) => {
  return async (dispatch, getState) => {
    const payload = {
      ownerKey: '123123',
      ...product
    }
    console.log('PRODUCT PAYLOAD', payload)
    try {
      await firebase.database().ref('/products').push(payload)
      // dispatch({ type: 'ADD_PRODUCT', product: product })
    } catch (e) {
      throw new Error(e)
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
