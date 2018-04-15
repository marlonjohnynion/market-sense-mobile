import { StackNavigator } from 'react-navigation'
import ProductsList from '../containers/ProductListView'
import NewOrder from '../containers/NewOrder'
import ProductContainer from '../containers/ProductContainer'
import OrderConfirmation from '../containers/OrderConfirmationContainer'
import { transparentHeaderNavOptions } from './common/options/transparentHeader'

const ProductsNav = StackNavigator({
  ProductsList: {
    screen: ProductsList,
    navigationOptions: {
      title: 'Products List',
      header: null
    }
  },
  Order: {
    screen: NewOrder
  },
  OrderData: {
    screen: OrderConfirmation,
    navigationOptions: {
      ...transparentHeaderNavOptions
    }
  },
  Product: {
    screen: ProductContainer,
    navigationOptions: {
      title: 'Product Information'
    }
  }
}, {
  initialRouteName: 'ProductsList'
})

export default ProductsNav
