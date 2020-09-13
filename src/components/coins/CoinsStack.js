import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CoinsScreen } from './CoinsScreen';
import { CoinDetailScreen } from './CoinDetailScreen';

const Stack = createStackNavigator();

export const CoinsSack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Coins" component={ CoinsScreen } />
      <Stack.Screen name="CoinDetail" component={ CoinDetailScreen } />
    </Stack.Navigator>
  );
} 