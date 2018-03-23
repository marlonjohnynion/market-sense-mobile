import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import user from './user'
import products from './product'

export default combineReducers({
  user: user,
  products: products,
  form: formReducer
})
