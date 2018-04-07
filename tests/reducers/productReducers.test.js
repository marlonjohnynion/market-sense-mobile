import productReducers from '../../src/reducers/product'

describe('Reducers Test: Product', () => {
  let productsList
  beforeEach(() => {
    productsList = [
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
    state = productReducers(state, { type: 'SHOW_PRODUCTS', products: productsList })
    const expected = { productsList: [...productsList] }
    expect(state).toEqual(expected)
  })

  it('+++ reducer for adding products', () => {
    const product = {
      id: 3,
      productTitle: 'Cabbage',
      productDescription: 'Free cabbage from the yard.'
    }
    let state = { products: [...productsList] }
    state = productReducers(state, { type: 'ADD_PRODUCT', product: product })
    const expected = { products: [...productsList] }
    expected.products.push(product)
    expect(state).toEqual(expected)
  })

  it('+++ reducer for selecting product', () => {
    let state = {}
    const expected = { selectedProduct: productsList[0] }
    const selectedProduct = productsList[0]
    state = productReducers(state, { type: 'SELECT_PRODUCT', selectedProduct: selectedProduct })
    expect(state).toEqual(expected)
  })
})
