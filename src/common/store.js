import { createStore, applyMiddleware } from 'redux'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import thunk from 'redux-thunk'
import reducers from './../reducers'

import { composeWithDevTools } from 'remote-redux-devtools'

export const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, navMiddleware))
)
