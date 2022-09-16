import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from "./components/Home" 
import Form from './components/Form'

const Tab = createBottomTabNavigator


const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" components={Home} />
      <Tab.Screen name="Form" components={Form}/>
    </Tab.Navigator>
  )
}

export default TabNavigator