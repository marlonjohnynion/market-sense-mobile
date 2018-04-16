import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { searchTermChange, filterProducts } from '../actions/productActions'
import { selectProduct } from '../actions/creators/product'
import ProductsList from '../components/ProductsList'

export const ProductListView = ({ products, searchTerm, filteredProducts, actions }) => {
  return <ProductsList products={products} searchTerm={searchTerm} actions={actions} filteredProducts={filteredProducts}/>
}

const mapStateToProps = (state) => ({
  products: state.products.productsList,
  filteredProducts: state.products.filteredProducts,
  searchTerm: state.products.searchTerm
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ selectProduct, searchTermChange, filterProducts }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListView)
