import React from 'react'
import { ScrollView, StyleSheet, Image } from 'react-native'
import { SafeAreaView, DrawerItems } from 'react-navigation'

export const Drawer = props => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <Image
        source={require('../../../assets/images/food-wood-tomatoes.jpg')}
        style={styles.image}/>
      <DrawerItems {...props}/>
    </SafeAreaView>
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 120,
    width: null,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Drawer
