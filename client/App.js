import React from 'react';
import Home from './components/Home';
import Form from './components/Form';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigator from './components/homeStack'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Form" path='/form' component={Form} />
      </Stack.Navigator>
  
    </NavigationContainer>
        
  );
}





