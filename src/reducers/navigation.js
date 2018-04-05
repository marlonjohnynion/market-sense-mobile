import { AppNavigator } from '../containers/AppNavigator'

const router = AppNavigator.router
const loginNav = router.getActionForPathAndParams('Login')
const initialState = router.getStateForAction(loginNav)

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)
  return nextState || state
}

export default navReducer
