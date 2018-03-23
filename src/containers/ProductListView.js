import React from 'react'
import ProductListItem from '../components/ProductListItem'
import {
  Container, Header, Button, Icon,
  Item, Input, Text
} from 'native-base'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Login } from './Login'

const ProductsList = ({products}) => {
  return products.map((product) => <ProductListItem key={product.productTitle} product={product}/>)
}

export const ProductListView = ({products}) => {
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

const mapStateToProps = (state) => {
  return ({
    products: state.products
  })
}

export default connect(mapStateToProps)(ProductListView)
