import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FavoritesScreen } from './FavoritesScreen'

const Stack = createStackNavigator()

export const FavoritesStack = () => {
  return (
    <Stack.Navigator screenOptions={ screenOpts }>
      <Stack.Screen name='Favorites' component={ FavoritesScreen } />
    </Stack.Navigator>
  )
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