import React from 'react'
import { Text, View } from 'react-native'

export const CoinsItem = ({ item }) => {
  return (
    <View>
      <Text>{ item.name }</Text>
      <Text>{ item.symbol }</Text>
    </View>
  )
}
