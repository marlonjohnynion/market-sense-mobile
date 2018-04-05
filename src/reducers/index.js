import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import user from './user'
import products from './product'
import navigation from './navigation'

export default combineReducers({
  user: user,
  products: products,
  nav: navigation,
  form: formReducer
})
