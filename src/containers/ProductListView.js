import React from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import { bindActionCreators } from 'redux'
import ProductListItem from '../components/ProductListItem'
import {
  Container, Header, Button, Icon,
  Item, Input, Text
} from 'native-base'
import { connect } from 'react-redux'
import { selectProduct, searchTermChange, filterProducts } from '../actions/productActions'

export const ProductsList = ({ products, selectProduct }) => {
  if (products) {
    return products.map((product) => <ProductListItem key={product.productTitle} product={product}
                                                      selectProduct={selectProduct}/>)
  }
  return <ActivityIndicator/>
}

export const ProductListView = ({ products, selectProduct, searchTermChange, searchTerm, filterProducts, filteredProducts }) => {
  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search"/>
          <Input onChangeText={searchTermChange}/>
        </Item>
        <Button transparent onPress={() => { filterProducts() }}>
          <Text>Search</Text>
        </Button>
      </Header>
      <ScrollView>
        <ProductsList products={!searchTerm ? products : filteredProducts} selectProduct={selectProduct}/>
      </ScrollView>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  products: state.products.productsList,
  filteredProducts: state.products.filteredProducts,
  searchTerm: state.products.searchTerm
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ selectProduct, searchTermChange, filterProducts }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductListView)
