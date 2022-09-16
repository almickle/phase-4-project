// import React from 'react';
import Home from './components/Home';
import Form from './components/Form';
import Health from "./components/Health"
import Sports from './components/Sports';
import Science from './components/Science';
import Technology from './components/Technology';
import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Navigator from './components/homeStack'

// import { NativeRouter, Route, Link, Routes } from "react-router-native";
// import { Switch } from "react-router-dom";

const Stack = createNativeStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Health" component={Health} />
        <Stack.Screen name="Sports" component={Sports} />
        <Stack.Screen name="Science" component={Science} />
        <Stack.Screen name="Technology" component={Technology} />
      </Stack.Navigator>
    </NavigationContainer>

)}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    // list-style-type: none,
  margin: 0,
  padding: 0,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});







