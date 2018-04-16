import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

export const Loading = () => (
  <View style={styles.container}>
    <Image source={require('../assets/images/loading.gif')} style={styles.image}/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  },
  image: {
    height: 72,
    width: 72
  }
})

export default Loading
