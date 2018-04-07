import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import ConnectedProductsListView from '../../src/containers/ProductListView'

describe('<ProductsListView />', () => {
  const initialState = {
    products: [
      {
        productTitle: 'Carrots',
        productPrice: '₱1500 / 10 kg',
        productLocation: 'OTON, ILOILO',
        productDescription: 'Perfect accompaniment for mains and sandwiches. Ideal edible bed for roasted...',
        productImageUri: 'https://firebasestorage.googleapis.com/v0/b/marketsense-b09f8.appspot.com/o/products%2Fp3.png?alt=media&token=7fd95509-ea2b-4188-b85e-218609d5ee26'
      },
      {
        productTitle: 'Organic Chicken Thighs and Legs',
        productPrice: '₱1000 / 10 kg',
        productLocation: 'LEON, ILOILO',
        productDescription: `Pure organic chicken made in Leon's finest poultry laboratories...`,
        productImageUri: 'https://firebasestorage.googleapis.com/v0/b/marketsense-b09f8.appspot.com/o/products%2Fp4.png?alt=media&token=a26df185-c60c-4a5f-a7d8-4a0d331ccf2a'
      }
    ]
  }

  let container
  let store
  beforeEach(() => {
    store = configureStore()(initialState)
    container = shallow(<ConnectedProductsListView store={store} />)
  })

  it('renders the smart component', () => {
    expect(container).toHaveLength(1)
  })

  it('renders the smart component as expected', () => {
    expect(container).toMatchSnapshot()
  })

  it('receives the props correctly', () => {
    expect(container.prop('products')).toEqual(initialState.products)
  })
})
