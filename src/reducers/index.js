import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import user from './user'
import products from './product'
import navigation from './navigation'
import orders from './order'

export default combineReducers({
  user: user,
  products: products,
  orders: orders,
  nav: navigation,
  form: formReducer
})
