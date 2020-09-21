import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-material-ui'
import MassegeBox from '../components/MassegeBox'
import ProfileCard from '../components/ProfileCard'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
    paddingVertical: 15
  }

})


const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <ProfileCard name="TEST" />
      <MassegeBox />
    </View>)
}

export default HomeScreen
