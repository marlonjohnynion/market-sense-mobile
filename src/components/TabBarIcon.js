import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const TabBarIcon = ({ focused, tintColor, navigationState }) => {
  const { routeName } = navigationState
  let iconName
  if (routeName === 'Login') {
    iconName = `ios-person${focused ? '' : '-outline'}`
  } else {
    iconName = `ios-person-add${focused ? '' : '-outline'}`
  }
  return <Icon name={iconName} size={30} color={tintColor}/>
}

export default TabBarIcon
