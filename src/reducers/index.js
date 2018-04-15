import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import user from './user'
import products from './product'
import navigation from './navigation'
import orders from './order'
import image from './image'
import app from './app'

export default combineReducers({
  app: app,
  user: user,
  products: products,
  orders: orders,
  nav: navigation,
  image: image,
  form: formReducer
})
