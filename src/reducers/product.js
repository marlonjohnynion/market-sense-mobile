const product = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_PRODUCTS':
      return { ...state, productsList: action.products }
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
