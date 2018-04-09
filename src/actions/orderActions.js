import firebase from '../common/firebase'

export const addOrder = (order) => {
  return async (dispatch, getState) => {
    const { selectedProduct } = getState().products
    const newOrder = {
      productKey: selectedProduct.key,
      ...order
    }
    const orderReference = await firebase.database().ref('/orders').push(newOrder)
    dispatch({type: 'ADD_ORDER', order: newOrder})
  }
}
