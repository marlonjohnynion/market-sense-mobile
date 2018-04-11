import { insertItemToArray } from '../common/helpers'

const initialState = {
  ordersList: [],
  ordersMadeToUser: []
}

const order = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      return {
        ...state,
        currentOrder: action.order,
        ordersList: insertItemToArray(state.ordersList, action.order)
      }
    case 'LOAD_ORDERS':
      return {
        ...state,
        ordersList: action.orders.concat(state.ordersList)
      }
    case 'LOAD_ORDERS_MADE_TO_USER':
      return {
        ...state,
        ordersMadeToUser: action.orders.concat(state.ordersMadeToUser)
      }
    case 'VIEW_ORDER_RECEIPT':
      return {
        ...state,
        currentOrder: action.order
      }
    case 'VIEW_SALE_RECEIPT':
      return {
        ...state,
        currentOrder: action.order
      }
    default:
      return state
  }
}

export default order
