import { createStore, applyMiddleware } from 'redux'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import thunk from 'redux-thunk'
import reducers from './../reducers'

export const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

export default createStore(
  reducers,
  applyMiddleware(thunk, navMiddleware)
)
