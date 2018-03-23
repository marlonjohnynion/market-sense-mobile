import React from 'react'
import { shallow } from 'enzyme'
import ProductView from '../../src/components/ProductView'
import { Image, Text } from 'react-native'

describe('<ProductView />', () => {
  const product = {
    uri: 'https://firebasestorage.googleapis.com/v0/b/marketsense-b09f8.appspot.com/o/products%2Fp0.png?alt=media&token=c305d51d-1b8b-4fbb-bd10-0c03a5c5805d',
    productTitle: 'Carrots',
    productCategory: 'Vegetable',
    productOwner: 'Marlon John Ynion',
    productDescription: 'Some vegetables',
    productPrice: 5,
    productRating: 5
  }
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<ProductView product={product}/>)
  })

  it('renders the component', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the product image', () => {
    expect(wrapper.find(Image)).toHaveLength(1)
  })

  it('renders the product and owner meta data', () => {
    expect(wrapper.find(Text)).toHaveLength(5)
  })
})
