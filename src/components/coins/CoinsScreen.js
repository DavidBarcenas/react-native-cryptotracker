import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Http } from '../../libs/http'
import { CoinsItem } from './CoinsItem'
import { CoinsSearch } from './CoinsSearch';

export const CoinsScreen = ({navigation: { navigate }}) => {

  const [coinsState, setCoins] = useState({
    allCoins: [],
    coins: [],
    loading: false
  })

  useEffect( () => {
    (async () => {
      setCoins({...coinsState, loading: true})
      const data = await Http.instance.get('https://api.coinlore.net/api/tickers/')
      setCoins({ coins: data.data, allCoins: data.data, loading: false})
   })() 
  }, [])

  const { coins, allCoins, loading } = coinsState;

  const handlePress = (coin) => navigate('CoinDetail', { coin })
  const handleSearch = (query) => {
    const coinsFiltered = allCoins.filter((coin) => {
      return coin.name.toLowerCase().includes(query.toLowerCase()) || coin.symbol.toLowerCase().includes(query.toLowerCase())
    })
    setCoins({
      ...coinsState,
      coins: coinsFiltered
    })
  }

  return (
    <View style={ styles.container }>
      <CoinsSearch onChange={ handleSearch } />
      {
        loading ? <ActivityIndicator color="#fff" size="large" style="styles.loader" /> : null
      }
      <FlatList data={ coins } renderItem={ ({ item }) => 
        <CoinsItem item={ item } onPress={ () => handlePress(item) }/>
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272c35',
  },
  btn: {
    padding: 0,
  },
  btnText: {
    color: '#fff'
  },
  loader: {
    marginTop: 60
  }
})