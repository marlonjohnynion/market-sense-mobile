import firebase from '../../common/firebase'

export const realtimeOrderListeners = (dispatch) => {
  const ordersRef = firebase.database().ref('/orders')
  ordersRef.on('child_added', addOrderFromListener(dispatch))
  ordersRef.on('child_changed', updateOrderFromListener(dispatch))
}

export const updateOrderFromListener = (dispatch) => {
  return async (data) => {
    const order = await getOrderWithProductData(dispatch, data)
    dispatch({ type: 'UPDATE_ORDER', order: order })
  }
}

export const addOrderFromListener = (dispatch) => {
  return async (data) => {
    const order = await getOrderWithProductData(dispatch, data)
    dispatch({ type: 'ADD_ORDER', order: order })
  }
}

export const getOrderWithProductData = async (dispatch, data) => {
  const order = data.val()
  order.key = data.key
  const { product } = order
  const productData = await firebase.database().ref(`/products/${product.key}`).once('value')
  order.product = {
    ...productData.val(),
    ...product
  }
  return order
}
