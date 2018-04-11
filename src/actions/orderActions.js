import firebase from '../common/firebase'
import { generateInvoiceNumber } from '../common/helpers'
import { ActionSheet } from 'native-base'

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
      sellerKey: selectedProduct.ownerKey,
      invoiceNumber: generateInvoiceNumber(),
      quantity: parseInt(order.quantity),
      status: 'Pending',
      userKey: getState().user.uid,
      product: {
        ...parsedProductData
      }
    }
    try {
      await firebase.database().ref('/orders').push(payload)
      dispatch({ type: 'ADD_ORDER_NAV' })
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const viewOrderReceipt = (order) => ({
  type: 'VIEW_ORDER_RECEIPT',
  order: order
})

export const viewSaleReceipt = (order) => ({
  type: 'VIEW_SALE_RECEIPT',
  order: order
})

export const updateOrderStatus = (order) => {
  return async (dispatch) => {
    const actions = ['Delivered', 'Received', 'Pending', 'Cancelled', 'Cancel Status Update']
    const destructiveIndex = 3
    const cancelIndex = 4
    ActionSheet.show(
      {
        options: actions,
        cancelButtonIndex: cancelIndex,
        destructiveButtonIndex: destructiveIndex,
        title: 'Update Status'
      },
      buttonIndex => {
        const status = actions[buttonIndex]
        if (status !== actions[cancelIndex]) {
          dispatch(sendStatusUpdate(order, status))
        }
      }
    )
  }
}

export const sendStatusUpdate = (order, status) => {
  return async () => {
    try {
      const orderRef = firebase.database().ref('/orders')
      await orderRef.child(order.key).update({
        status: status
      })
    } catch (e) {
      throw new Error(e)
    }
  }
}
