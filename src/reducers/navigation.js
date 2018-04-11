import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../containers/AppNavigator'
import { getCurrentRoute } from '../common/helpers'

const router = AppNavigator.router
const loginNav = router.getActionForPathAndParams('Login')
const initialState = router.getStateForAction(loginNav)

const navReducer = (state = initialState, action) => {
  let nextState
  switch (action.type) {
    case 'LOGIN':
      nextState = router.getStateForAction(NavigationActions.navigate({ routeName: 'ProductsList' }), state)
      break
    case 'SELECT_PRODUCT':
      nextState = router.getStateForAction(NavigationActions.navigate({ routeName: 'Product' }), state)
      break
    case 'VIEW_PRODUCT_AVAILABILITY':
      nextState = router.getStateForAction(NavigationActions.navigate({ routeName: 'Order' }), state)
      break
    case 'ADD_ORDER':
      const key = getCurrentRoute(state).key
      nextState = router.getStateForAction(NavigationActions.replace({ key: key, routeName: 'OrderData' }), state)
      break
    case 'EDIT_PRODUCT':
      nextState = router.getStateForAction(NavigationActions.navigate({ key: key, routeName: 'EditProduct' }), state)
      break
    case 'VIEW_ORDER':
      nextState = router.getStateForAction(NavigationActions.navigate({ routeName: 'OrderData' }), state)
      break
    case 'VIEW_ORDER_RECEIPT':
      nextState = router.getStateForAction(NavigationActions.navigate({ routeName: 'OrderReceipt'}), state)
      break
    default:
      nextState = router.getStateForAction(action, state)
      break
  }
  return nextState || state
}

export default navReducer
