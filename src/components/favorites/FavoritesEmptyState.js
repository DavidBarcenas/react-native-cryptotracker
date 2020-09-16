import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FavoritesEmptyState = () => {
  return (
    <View style={ style.container }>
      <Text style={ style.text }>you don´t have any favorite yet</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
     alignContent: 'center',
     justifyContent: 'center'
  },
  text: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center'
  }
})