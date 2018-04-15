import React from 'react'
import { StackNavigator } from 'react-navigation'
import EditProduct from '../containers/EditProduct'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { initiateProductAdd } from '../actions/productActions'
import HeaderButtons from 'react-navigation-header-buttons'
import NewProduct from '../containers/NewProduct'
import MyProducts from '../containers/MyProducts'

export const MyProductsNav = StackNavigator({
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

export default MyProductsNav
