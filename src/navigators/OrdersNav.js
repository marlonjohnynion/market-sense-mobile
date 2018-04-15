import { StackNavigator } from 'react-navigation'
import OrdersList from '../containers/OrdersListContainer'
import OrderConfirmation from '../containers/OrderConfirmationContainer'

export const OrdersNav = StackNavigator({
  OrdersList: {
    screen: OrdersList,
    navigationOptions: {
      title: 'Orders List'
    }
  },
  OrderReceipt: {
    screen: OrderConfirmation,
    navigationOptions: {
      title: 'Receipt'
    }
  }
}, {
  initialRouteName: 'OrdersList'
})

export default OrdersNav
