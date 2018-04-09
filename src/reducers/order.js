import { insertItemToArray } from '../common/helpers'

const initialState = {
  ordersList: []
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
    default:
      return state
  }
}

export default order
