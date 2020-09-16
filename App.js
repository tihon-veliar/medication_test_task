import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  CalendarScreen,
  HomeScreen,
  MedicationDetailsScreen,
  MedicationScreen
} from './src/screens'

import store from './src/redux'



const Stack = createStackNavigator()


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Calendar" component={CalendarScreen} />
          <Stack.Screen name="Medication" component={MedicationScreen} />
          <Stack.Screen name="Medication details" component={MedicationDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


