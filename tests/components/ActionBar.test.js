import React from 'react'
import { shallow } from 'enzyme'
import ProductActionBar, {ProductPrice, ActionButton} from '../../src/components/ProductActionBar'
import { checkProductAvailability } from '../../src/actions/productActions'

const product = {
  productImageUri: 'https://firebasestorage.googleapis.com/v0/b/marketsense-b09f8.appspot.com/o/products%2Fp0.png?alt=media&token=c305d51d-1b8b-4fbb-bd10-0c03a5c5805d',
  productTitle: 'Carrots',
  productCategory: 'Vegetable',
  productOwner: 'Marlon John Ynion',
  productDescription: 'Some vegetables',
  productPrice: 5,
  productRating: 5
}

const actions = {
  checkProductAvailability: checkProductAvailability
}

describe('<ProductActionBar />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ProductActionBar product={product} actions={actions}/>)
  })

  it('renders the action bar', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders the action button', () => {
    expect(wrapper.find(ActionButton)).toHaveLength(1)
  })

  it('renders the product price', () => {
    expect(wrapper.find(ProductPrice)).toHaveLength(1)
  })

  it('renders the component as expected', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
