import productReducers from '../../src/reducers/product'

describe('Reducers Test: Product', () => {
  let products
  beforeEach(() => {
    products = [
      {
        id: 1,
        productTitle: 'Carrots',
        productDescription: 'Orange colored vegetables.'
      },
      {
        id: 2,
        productTitle: 'Chicken Thigh',
        productDescription: 'Organic chicken.'
      }
    ]
  })

  it('+++ reducer for showing products', () => {
    let state = {}
    state = productReducers(state, {type: 'SHOW_PRODUCTS', products: products})
    const expected = {products: products}
    expect(state).toEqual(expected)
  })

  it('+++ reducer for adding products', () => {
    const product = {
      id: 3,
      productTitle: 'Cabbage',
      productDescription: 'Free cabbage from the yard.'
    }
    let state = {products: [...products]}
    state = productReducers(state, {type: 'ADD_PRODUCT', product: product})
    const expected = { products: [...products] }
    expected.products.push(product)
    expect(state).toEqual(expected)
  })

  it('+++ reducer for selecting product', () => {
    let state = {}
    const expected = { selectedProduct: products[0] }
    const selectedProduct = products[0]
    state = productReducers(state, {type: 'SELECT_PRODUCT', selectedProduct: selectedProduct})
    expect(state).toEqual(expected)
  })
})
