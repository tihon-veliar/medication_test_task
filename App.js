import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Checkbox } from 'react-native-material-ui'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hot Reaload</Text>
      <StatusBar />
      <Checkbox />
    </View>
  )
}


