import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { StorageLib } from '../../libs/storage'
import { CoinsItem } from '../coins/CoinsItem'
import { FavoritesEmptyState } from './FavoritesEmptyState'

export const FavoritesScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([])

  getFavorites = async () => {
    try {
      const allKeys = await StorageLib.instance.getAllKeys()
      const keys = allKeys.filter((key) => key.includes('favorite-'));
      const favs = await StorageLib.instance.multiGet(keys) 
      const favorites = favs.map((fav) => JSON.parse(fav[1]));
      setFavorites(favorites)
    } 
    catch (error) {
      console.log('get favorites error', error)
    }
  }

  const handlePress = (coin) => {
    navigation.navigate('CoinDetail', { coin })
  }


  useEffect(() => {
    navigation.addListener('focus', getFavorites)
    return () => {
      navigation.removeListener('focus', getFavorites)
    }
  }, [])

  return (
    <View style={ style.container }>
      { favorites.length == 0 ? 
        <FavoritesEmptyState /> :  
        <FlatList data={ favorites } renderItem={({ item }) => <CoinsItem item={ item } onPress={ () => handlePress(item) } />} />
      }
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272c35',
  },
})