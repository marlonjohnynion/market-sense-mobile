import { realtimeOrderListeners } from './productListeners'
import { realtimeProductListeners } from './orderListeners'

export const initializeListeners = (dispatch) => {
  realtimeOrderListeners(dispatch)
  realtimeProductListeners(dispatch)
}
