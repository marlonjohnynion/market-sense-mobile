import firebase from '../common/firebase'
import { generateInvoiceNumber } from '../common/helpers'

export const addOrder = (order) => {
  return async (dispatch, getState) => {
    const { selectedProduct } = getState().products
    const parsedProductData = {
      key: selectedProduct.key,
      productPrice: parseFloat(selectedProduct.productPrice),
      lotSize: parseFloat(selectedProduct.lotSize)
    }
    const payload = {
      ...order,
      invoiceNumber: generateInvoiceNumber(),
      quantity: parseInt(order.quantity),
      product: {
        ...parsedProductData
      }
    }
    const newOrder = {
      ...payload,
      product: {
        ...selectedProduct
      }
    }
    try {
      await firebase.database().ref('/orders').push(payload)
      dispatch({ type: 'ADD_ORDER', order: newOrder })
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const loadOrders = () => {
  return async (dispatch) => {
    try {
      const orders = []
      const data = await firebase.database().ref('/orders').once('value')
      for (const [key, resData] of Object.entries(data.val())) {
        const order = {
          key: key,
          ...resData
        }
        const { product } = order
        const productData = await firebase.database().ref(`/products/${product.key}`).once('value')
        order.product = {
          ...productData.val(),
          ...order.product
        }
        orders.push(order)
      }
      dispatch({ type: 'LOAD_ORDERS', orders: orders })
    } catch (e) {
      throw new Error(e)
    }
  }
}
