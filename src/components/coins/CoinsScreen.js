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

  console.log(coins)
  const { allCoins, loading } = coins;

  const handlePress = () => navigate('CoinDetail')

  return (
    <View style={ styles.container }>
      {
        loading ? <ActivityIndicator color="#F00" size="large" style="styles.loader" /> : null
      }
      <FlatList data={ allCoins } renderItem={ ({ item }) => 
        <CoinsItem item={ item }/>
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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