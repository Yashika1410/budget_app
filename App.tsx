/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateProduct from './app/screens/Home';
import Items from './app/screens/Items';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: {
            backgroundColor: '#3498db', // Background color of the navigation bar
          },
          headerTintColor: 'white', // Text color of the header buttons
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
          <Stack.Screen name="Home" component={CreateProduct} /> 
          <Stack.Screen name="Items" component={Items} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

