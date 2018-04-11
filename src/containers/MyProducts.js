import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DataList from '../components/DataList'
import { viewProduct, deleteProduct } from '../actions/productActions'
import MyProductsListItem from '../components/MyProductsListItem'

const ListItem = ({data, actions}) => {
  return (
    <MyProductsListItem key={data.key} product={data} actions={actions}/>
  )
}

const MyProducts = (props) => {
  const { products, actions } = props
  return <DataList data={products} actions={actions} RowComponent={ListItem}/>
}

const mapStateToProps = state => {
  return {
    products: state.products.productsList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ viewProduct, deleteProduct }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProducts)
