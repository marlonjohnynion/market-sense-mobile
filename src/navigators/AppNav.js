import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import Drawer from './common/components/Drawer'
import MyProductsNav from './MyProductsNav'
import OrdersNav from './OrdersNav'
import DrawerIcon from './common/components/DrawerIcon'
import ProductsNav from './ProductsNav'
import SalesNav from './SalesNav'

export const AppNav = DrawerNavigator({
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

export default AppNav
