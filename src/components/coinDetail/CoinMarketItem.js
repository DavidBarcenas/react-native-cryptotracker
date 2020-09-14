import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const CoinMarketItem = ({ item }) => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.nameText }>{item.name}</Text>
      <Text style={ styles.priceText }>{item.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderBottomColor: '#3a4049',
    borderBottomWidth: 1,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 4
  },
  nameText: {
    color: "#fff",
    fontWeight: 'bold'
  },
  priceText: {
    color: '#fff'
  }
})