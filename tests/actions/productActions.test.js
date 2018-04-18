import * as product from '../../src/actions/creators/product'

describe('Actions Test: Product Actions', () => {
  it('+++ ACTION CREATOR -> changes search term', () => {
    const searchTerm = 'test'
    const test = product.changeSearchTerm(searchTerm)
    expect(test).toEqual({ type: 'SEARCH_TERM_CHANGE', searchTerm: searchTerm })
  })

  it('+++ ACTION CREATOR -> view product availability', () => {
    const test = product.viewProductAvailability()
    expect(test).toEqual({ type: 'VIEW_PRODUCT_AVAILABILITY' })
  })

  it('+++ ACTION CREATOR -> filters products', () => {
    const searchTerm = 'test'
    const test = product.productFilter(searchTerm)
    expect(test).toEqual({ type: 'FILTER_PRODUCTS', searchTerm: searchTerm })
  })

  it('+++ ACTION CREATOR -> selects products', () => {
    const selectedProduct = { id: 1, data: 'test' }
    const test = product.selectProduct(selectedProduct)
    expect(test).toEqual({ type: 'SELECT_PRODUCT', selectedProduct: selectedProduct })
  })
})
