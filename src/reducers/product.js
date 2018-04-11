import { insertItemToArray } from '../common/helpers'

const product = (state = { productsList: [] }, action) => {
  let products
  switch (action.type) {
    case 'SELECT_PRODUCT':
      return { ...state, selectedProduct: action.selectedProduct }
    case 'ADD_PRODUCT':
      return {...state, productsList: insertItemToArray([...state.productsList], action.product)}
    case 'EDIT_PRODUCT':
      return { ...state, editedProduct: action.product }
    case 'UPDATE_PRODUCT':
      products = state.productsList.filter(item => item.key !== action.product.key)
      products.push(action.product)
      return {...state, productsList: products, editedProduct: action.product, selectedProduct: action.product}
    case 'DELETE_PRODUCT':
      const filteredProducts = [...state.productsList].filter(product => product.key !== action.product.key)
      return {...state, productsList: filteredProducts}
    default:
      return state
  }
}

export default product
