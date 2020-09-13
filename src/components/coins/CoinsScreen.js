import React, { useEffect } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Http } from '../../libs/http'

export const CoinsScreen = ({navigation: { navigate }}) => {


  useEffect( () => {
   (async () => {
     const coins = await Http.instance.get('https://api.coinlore.net/api/tickers/')
     console.log(coins)
   })() 
  }, [])

  const handlePress = () => navigate('CoinDetail')

  return (
    <View style={ styles.container }>
      <Text>Coins Sreen</Text>
      <Pressable style={ styles.btn } onPress={ handlePress }>
        <Text style={ styles.btnText }>go to detail</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  btn: {
    padding: 0,
    backgroundColor: 'blue'
  },
  btnText: {
    color: '#fff'
  }
})