import 'react-native-gesture-handler'
import React from 'react'
import { Button }from "react-native"
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-material-ui'


import {
  CalendarScreen,
  HomeScreen,
  MedicationDetailsScreen,
  MedicationScreen
} from './src/screens'

import store from './src/redux'

const headerOptions =  { headerLeft: () =>  <Icon name="menu" />, headerLeftContainerStyle: { marginLeft: 15 } }

const navigatorScreenOption = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName
    switch (route.name) {
      case "Home":
        iconName = "home"
        break
      case "Medication":
        iconName = "radio-button-unchecked"
        break
      case "Calendar": 
        iconName = "date-range"
        break
      default:
        break
    }
    return <Icon name={iconName} color={color} />
  },
  headerLeft: () =>  <Icon name="profile" />
})


const Medication = createStackNavigator()
function MedicationStackScreen() {
  return (
    <Medication.Navigator>
      <Medication.Screen 
        options={headerOptions}
        name="Medication"
        component={MedicationScreen}
      />
      <Medication.Screen
        name="MedicationDetails"
        component={MedicationDetailsScreen}
        options={{
          headerBackTitle: null,
          tabBarVisible: false,
          headerLeft: () =>  null
        }}
      />
    </Medication.Navigator>
  )
}
const Home = createStackNavigator()
function HomeScreenStackScreen() {
  return (
    <Home.Navigator>
      <Home.Screen
        options={headerOptions}
        name="Home"
        component={HomeScreen}
      />
    </Home.Navigator>
  )
}
const Calendar = createStackNavigator()
function CalendarStackScreen() {
  return (
    <Calendar.Navigator>
      <Calendar.Screen
        options={headerOptions}
        name="Calendar"
        component={CalendarScreen}
      />
    </Calendar.Navigator>
  )
}

const Tab = createBottomTabNavigator()


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={navigatorScreenOption}
          tabBarOptions={{ showLabel:false }}
        >
          <Tab.Screen name="Home" component={HomeScreenStackScreen} />
          <Tab.Screen name="Medication" component={MedicationStackScreen} />
          <Tab.Screen name="Calendar" component={CalendarStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


