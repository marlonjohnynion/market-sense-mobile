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
    case 'UPDATE_ORDER':
      const ordersList = state.ordersList.map(order => {
        if (order.key !== action.order.key) {
          return order
        }
        return { ...action.order }
      })
      const ordersMadeToUser = state.ordersMadeToUser.map(order => {
        if (order.key !== action.order.key) {
          return order
        }
        return { ...action.order }
      })
      const currentOrder = state.currentOrder.key === action.order.key ? {...action.order} : {...state.currentOrder}
      return {
        ...state,
        ordersList: ordersList,
        ordersMadeToUser: ordersMadeToUser,
        currentOrder: currentOrder
      }
    case 'ADD_ORDER_MADE_TO_USER':
      return {
        ...state,
        ordersMadeToUser: insertItemToArray([...state.ordersMadeToUser], action.order)
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
