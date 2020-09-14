import React from 'react'
import { View, Text } from 'react-native'

export const CoinDetailScreen = (props) => {
  console.log(props.route.params)
  return (
    <View>
      <Text>Coin Detail Screen</Text>
    </View>
  )
}