import firebase from '../../common/firebase'

export const realtimeOrderListeners = (dispatch, state) => {
  const userKey = state.user.uid
  const generalOrdersRef = firebase.database().ref('/orders')
  const ordersRef = firebase.database().ref('/orders')
    .orderByChild('userKey').equalTo(userKey)
  const ordersMadeToUserRef = firebase.database().ref('/orders')
    .orderByChild('sellerKey').equalTo(userKey)
  ordersRef.on('child_added', addOrderFromListener(dispatch))
  ordersMadeToUserRef.on('child_added', addOrderMadeToUser(dispatch))
  generalOrdersRef.on('child_changed', updateOrderFromListener(dispatch))
}

export const updateOrderFromListener = (dispatch) => {
  return async (data) => {
    const order = await getOrderWithProductData(dispatch, data)
    dispatch({ type: 'UPDATE_ORDER', order: order })
  }
}

export const addOrderMadeToUser = (dispatch) => {
  return async (data) => {
    const order = await getOrderWithProductData(dispatch, data)
    dispatch({ type: 'ADD_ORDER_MADE_TO_USER', order: order })
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
