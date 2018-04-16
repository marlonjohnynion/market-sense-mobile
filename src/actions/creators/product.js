export const initiateProductAdd = () => ({
  type: 'INITIATE_PRODUCT_ADD'
})

export const editProduct = (product) => {
  return async (dispatch) => {
    dispatch({ type: 'EDIT_PRODUCT', product: product })
  }
}

export const changeSearchTerm = (value) => ({
  type: 'SEARCH_TERM_CHANGE',
  searchTerm: value
})

export const viewProductAvailability = () => ({
  type: 'VIEW_PRODUCT_AVAILABILITY'
})

export const productFilter = (searchTerm) => ({
  type: 'FILTER_PRODUCTS', searchTerm: searchTerm
})

export const selectProduct = (product) => ({
  type: 'SELECT_PRODUCT',
  selectedProduct: product
})
