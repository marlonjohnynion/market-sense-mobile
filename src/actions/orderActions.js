import firebase from '../common/firebase'
import { generateInvoiceNumber, isNumber, toast } from '../common/helpers'
import { ActionSheet } from 'native-base'
import { addOrderThenNavigate } from './creators/order'

export const validateOrder = values => {
  const { deliveryDate, quantity, deliveryAddressLine1, deliveryAddressLine2, city, province, contact } = values
  if (!deliveryDate || !quantity || !deliveryAddressLine1 || !deliveryAddressLine2 || !city || !province || !contact) {
    throw new Error('Please fill up all fields!')
  }
  if (!isNumber(quantity) || (isNumber(quantity) && parseInt(quantity) <= 0)) {
    throw new Error('Quantity must be a valid number!')
  }
  if (!isNumber(contact)) {
    throw new Error('Contact number must be a number!')
  }
}

export const addOrder = (order) => {
  return async (dispatch, getState) => {
    try {
      validateOrder(order)
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
      await firebase.database().ref('/orders').push(payload)
      dispatch(addOrderThenNavigate())
    } catch (e) {
      toast(e)
    }
  }
}

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
