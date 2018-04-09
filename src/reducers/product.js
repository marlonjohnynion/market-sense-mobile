const product = (state = { productsList: [] }, action) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return { ...state, productsList: action.products.concat(state.productsList) }
    case 'SELECT_PRODUCT':
      return { ...state, selectedProduct: action.selectedProduct }
    case 'ADD_PRODUCT':
      const product = action.product
      const newProducts = [...state.products]
      newProducts.push(product)
      return {...state, products: newProducts}
    default:
      return state
  }
}

export default product
