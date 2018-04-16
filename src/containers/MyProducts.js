import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Icon } from 'native-base'
import DataList from '../components/DataList'
import { editProduct, deleteProduct } from '../actions/productActions'
import MyProductsListItem from '../components/MyProductsListItem'

const ListItem = ({ data, actions }) => {
  return <MyProductsListItem key={data.key} product={data} actions={actions}/>
}

const RightHiddenRowComponent = ({ data, actions }) => (
  <Button full danger onPress={() => { actions.deleteProduct(data) }}>
    <Icon active name="trash"/>
  </Button>
)

const MyProducts = (props) => {
  const { products, actions } = props
  return <DataList data={products} actions={actions} RowComponent={ListItem} RightHiddenRowComponent={RightHiddenRowComponent}/>
}

const mapStateToProps = state => {
  return {
    products: state.products.userProductsList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ editProduct, deleteProduct }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProducts)
