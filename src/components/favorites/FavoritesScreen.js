import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FavoritesEmptyState } from './FavoritesEmptyState'

export const FavoritesScreen = () => {
  return (
    <View style={ style.container }>
      <FavoritesEmptyState />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272c35',
  },
})