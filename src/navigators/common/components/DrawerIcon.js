import React from 'react'
import { Icon } from 'native-base'

export const DrawerIcon = ({ name, focused, tintColor }) => (
  <Icon name={name} style={{ color: tintColor }}/>
)

export default DrawerIcon
