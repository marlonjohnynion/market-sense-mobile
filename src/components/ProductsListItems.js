import React from 'react'
import { ActivityIndicator } from 'react-native'
import ProductListItem from './ProductListItem'

export const ProductsListItems = ({ products, selectProduct }) => {
  if (products) {
    return products.map((product) => <ProductListItem key={product.productTitle} product={product} selectProduct={selectProduct}/>)
  }
  return <ActivityIndicator/>
}

export default ProductsListItems
