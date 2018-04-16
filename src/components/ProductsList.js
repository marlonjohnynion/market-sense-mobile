import React from 'react'
import {
  Container, Header, Button, Icon,
  Item, Input, Text
} from 'native-base'
import { ScrollView } from 'react-native'
import ProductsListItems from '../components/ProductsListItems'

const ProductsList = ({products, filteredProducts, actions, searchTerm}) => {
  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search"/>
          <Input onChangeText={actions.searchTermChange}/>
        </Item>
        <Button transparent onPress={() => { actions.filterProducts() }}>
          <Text>Search</Text>
        </Button>
      </Header>
      <ScrollView>
        <ProductsListItems products={!searchTerm ? products : filteredProducts} selectProduct={actions.selectProduct}/>
      </ScrollView>
    </Container>
  )
}

export default ProductsList
