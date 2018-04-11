import { realtimeOrderListeners } from './orderListeners'
import { realtimeProductListeners } from './productListeners'

export const initializeListeners = (dispatch, state) => {
  realtimeOrderListeners(dispatch, state)
  realtimeProductListeners(dispatch, state)
}
