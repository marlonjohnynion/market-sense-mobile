import React from 'react'
import { addNavigationHelpers, StackNavigator, SwitchNavigator, DrawerNavigator, TabNavigator } from 'react-navigation'
import { View } from 'react-native'
import { Icon } from 'native-base'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import Login from '../containers/Login'
import ProductsList from '../containers/ProductListView'
import ProductContainer from '../containers/ProductContainer'
import NewOrder from './NewOrder'
import OrderConfirmation from './OrderConfirmationContainer'
import OrdersList from './OrdersListContainer'
import TabBarIcon from '../components/TabBarIcon'
import Drawer from '../components/Drawer'
import NewProduct from '../containers/NewProduct'
import MyProducts from './MyProducts'
import EditProduct from './EditProduct'
import HeaderButtons from 'react-navigation-header-buttons'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { initiateProductAdd } from '../actions/productActions'
import MySales from './MySales'
import Register from './Register'

const transparentHeaderNavOptions = {
  headerStyle: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0
  },
  headerBackTitleStyle: {
    color: 'white'
  }
}

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

const OrdersNav = StackNavigator({
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

const SalesNav = StackNavigator({
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

const MyProductsNav = StackNavigator({
  UserProducts: {
    screen: MyProducts,
    navigationOptions: ({navigation}) => {
      return {
        title: 'My Products',
        headerRight: <HeaderButtons IconComponent={IonIcons} iconSize={23} color="blue">
          <HeaderButtons.Item title="add" iconName="ios-add-circle" onPress={() => navigation.dispatch(initiateProductAdd())} />
        </HeaderButtons>
      }
    }
  },
  EditProduct: {
    screen: EditProduct,
    navigationOptions: {
      title: 'Edit Product'
    }
  },
  NewProduct: {
    screen: NewProduct,
    navigationOptions: {
      title: 'New Product'
    }
  }
}, {
  initialRouteName: 'UserProducts'
})

const AuthNav = TabNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  }
}, {
  tabBarOptions: {
    labelStyle: {
      fontSize: 16
    },
    style: {
      height: 55
    }
  },
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: <TabBarIcon navigationState={navigation.state}/>
  })
})

const DrawerIcon = ({ name, focused, tintColor }) => (
  <Icon name={name} style={{ color: tintColor }}/>
)
const AppNav = DrawerNavigator({
  Products: {
    screen: ProductsNav,
    navigationOptions: {
      title: 'Products',
      drawerIcon: <DrawerIcon name={'nutrition'}/>
    }
  },
  MyProducts: {
    screen: MyProductsNav,
    navigationOptions: {
      title: 'My Products',
      drawerIcon: <DrawerIcon name={'copy'}/>
    }
  },
  Orders: {
    screen: OrdersNav,
    navigationOptions: {
      title: 'My Orders',
      drawerIcon: <DrawerIcon name={'cart'}/>
    }
  },
  MySales: {
    screen: SalesNav,
    navigationOptions: {
      title: 'My Sales',
      drawerIcon: <DrawerIcon name={'paper'}/>
    }
  }
}, {
  contentComponent: Drawer
})

export const AppNavigator = SwitchNavigator({
  Auth: AuthNav,
  App: AppNav
}, {
  initialRouteName: 'Auth'
})

const AppNavigatorState = ({ dispatch, nav }) => {
  const addListener = createReduxBoundAddListener('root')
  return (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav, addListener })}/>
  )
}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(AppNavigatorState)
