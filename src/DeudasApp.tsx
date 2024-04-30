import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { StackNavigator } from './presentation/navigation/StackNavigation';

export const DeudasApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  
  )
}
