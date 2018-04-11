import { insertItemToArray } from '../common/helpers'

const product = (state = { productsList: [], userProductsList: [] }, action) => {
  let products
  let productsList
  switch (action.type) {
    case 'SELECT_PRODUCT':
      return { ...state, selectedProduct: action.selectedProduct }
    case 'ADD_PRODUCT':
      return { ...state, productsList: insertItemToArray([...state.productsList], action.product) }
    case 'ADD_USER_PRODUCT':
      return { ...state, userProductsList: insertItemToArray([...state.userProductsList], action.product) }
    case 'EDIT_PRODUCT':
      return { ...state, editedProduct: action.product }
    case 'UPDATE_PRODUCT':
      productsList = state.productsList.map(product => product.key !== action.product.key ? product : {...action.product})
      products = state.userProductsList.map(product => product.key !== action.product.key ? product : {...action.product})
      return { ...state, productsList: productsList, userProductsList: products, editedProduct: action.product, selectedProduct: action.product }
    case 'DELETE_PRODUCT':
      const filteredProducts = [...state.productsList].filter(product => product.key !== action.product.key)
      return { ...state, productsList: filteredProducts }
    default:
      return state
  }
}

export default product
