import { insertItemToArray } from '../common/helpers'

const product = (state = { productsList: [] }, action) => {
  let products
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return { ...state, productsList: action.products.concat(state.productsList) }
    case 'SELECT_PRODUCT':
      return { ...state, selectedProduct: action.selectedProduct }
    case 'EDIT_PRODUCT':
      return { ...state, editedProduct: action.product }
    case 'ADD_PRODUCT':
      const newProducts = [...state.products]
      newProducts.push(action.product)
      return {...state, products: newProducts}
    case 'UPDATE_PRODUCT':
      let products = [...state.productsList]
      products = products.filter(item => item.key !== action.product.key)
      products.push(action.product)
      return {...state, productsList: products, editedProduct: action.product}
    case 'DELETE_PRODUCT':
      const filteredProducts = [...state.productsList].filter(product => product.key !== action.product.key)
      return {...state, productsList: filteredProducts}
    default:
      return state
  }
}

export default product
