import React from 'react'
import ProductListItem from '../components/ProductListItem'
import {
  Container, Header, Button, Icon,
  Item, Input, Text
} from 'native-base'
import { ScrollView } from 'react-native'

const products = [
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

const ProductsList = ({products}) => {
  return products.map((product) => <ProductListItem key={product.productTitle} product={product}/>)
}

const ProductListView = (props) => {
  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search"/>
          <Input />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <ScrollView>
        <ProductsList products={products}/>
      </ScrollView>
    </Container>
  )
}

export default ProductListView
