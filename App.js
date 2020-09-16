import React from 'react';
import { NavigationContainer }from '@react-navigation/native'
import { CoinsSack } from './src/components/coins/CoinsStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native';
import { FavoritesStack } from './src/components/favorites/FavoritesStack';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
   <NavigationContainer>
     <Tabs.Navigator tabBarOptions={{
       tintColor: '#fefefe',
       activeTintColor: '#fff',
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
          }} />

       <Tabs.Screen 
          name='Favorites' 
          component={ FavoritesStack } 
          options={{ 
            tabBarIcon: ({color, size}) => 
              <Image  
                style={{ tintColor: color, width: size, height: size }}
                source={ require('./src/assets/star.png') } />
          }}/>
     </Tabs.Navigator>
   </NavigationContainer>
  );
};

export default App;
