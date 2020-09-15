import React from 'react';
import { NavigationContainer }from '@react-navigation/native'
import { CoinsSack } from './src/components/coins/CoinsStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
   <NavigationContainer>
     <Tabs.Navigator tabBarOptions={{
       tintColor: '#fefefe',
       style: {
         backgroundColor: '#20252c'
       }
     }}>
       <Tabs.Screen 
          name='Coins' 
          component={ CoinsSack } 
          options={{ 
            tabBarIcon: ({color, size}) => 
              <Image  
                style={{ tintColor: color, width: size, height: size }}
                source={ require('./src/assets/bank.png') } />
          }}>
       </Tabs.Screen>
     </Tabs.Navigator>
   </NavigationContainer>
  );
};

export default App;
