import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native';

export const CoinsScreen = ({navigation: { navigate }}) => {

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