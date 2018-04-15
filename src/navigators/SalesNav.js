import { StackNavigator } from 'react-navigation'
import MySales from '../containers/MySales'
import OrderConfirmation from '../containers/OrderConfirmationContainer'

export const SalesNav = StackNavigator({
  Sales: {
    screen: MySales,
    navigationOptions: {
      title: 'Sales List'
    }
  },
  SaleReceipt: {
    screen: OrderConfirmation,
    navigationOptions: {
      title: 'Sale Receipt'
    }
  }
}, {
  initialRouteName: 'Sales'
})

export default SalesNav
