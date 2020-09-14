import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Http } from '../../libs/http'
import { CoinsItem } from './CoinsItem'

export const CoinsScreen = ({navigation: { navigate }}) => {

  const [coins, setCoins] = useState({
    allCoins: [],
    loading: false
  })

  useEffect( () => {
    (async () => {
      setCoins({...coins, loading: true})
      const data = await Http.instance.get('https://api.coinlore.net/api/tickers/')
      setCoins({allCoins: data.data, loading: false})
   })() 
  }, [])

  const { allCoins, loading } = coins;

  const handlePress = (coin) => navigate('CoinDetail', { coin })

  return (
    <View style={ styles.container }>
      {
        loading ? <ActivityIndicator color="#fff" size="large" style="styles.loader" /> : null
      }
      <FlatList data={ allCoins } renderItem={ ({ item }) => 
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