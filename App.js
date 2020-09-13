import React from 'react';
import { NavigationContainer }from '@react-navigation/native'
import { CoinsSack } from './src/components/coins/CoinsStack';

const App = () => {
  return (
   <NavigationContainer>
     <CoinsSack />
   </NavigationContainer>
  );
};

export default App;
