import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CoinsScreen } from './CoinsScreen';
import { CoinDetailScreen } from '../coinDetail/CoinDetailScreen';

const Stack = createStackNavigator();

export const CoinsSack = () => {
  return (
    <Stack.Navigator screenOptions={ screenOpts }>
      <Stack.Screen name="Coins" component={ CoinsScreen } />
      <Stack.Screen name="CoinDetail" component={ CoinDetailScreen } />
    </Stack.Navigator>
  );
} 

const screenOpts = {
  headerStyle: { 
    backgroundColor:'#272c35', 
    borderBottomColor:'#3a4049', 
    borderBottomWidth: 1 
  }, 
  headerTintColor: '#fff', 
  headerTitleAlign: 'center'
}