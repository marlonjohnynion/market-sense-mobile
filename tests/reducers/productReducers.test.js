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

  it('+++ reducer for adding products', () => {
    const product = {
      id: 3,
      productTitle: 'Cabbage',
      productDescription: 'Free cabbage from the yard.'
    }
    let state = { productsList: [...productsList], userProductsList: [] }
    state = productReducers(state, { type: 'ADD_PRODUCT', product: product })
    const expected = { productsList: [...productsList], userProductsList: [] }
    expected.productsList.push(product)
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
