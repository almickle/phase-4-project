import { View, Text } from 'react-native'
import React from 'react'
import TabNavigator from '../TabNavigator'

const RootNavigator = () => {
  return (
    <Stack.Navigator >
        <Stack.Group>
            <Stack.Screen name="Home" component={TabNavigator} />
        </Stack.Group>
      </Stack.Navigator>
  )
}

export default RootNavigator