import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import { Icon } from 'react-native-material-ui'
import PropTypes from 'prop-types'


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  titleBox: {
    marginLeft: 15,
    alignItems: "center"
  }
})


export default function ProfileCard({ name }) {
  return ( 
    <View style={styles.container}>
      <View>
        <Icon name="account-circle" size={60} />
      </View>
      <View style={styles.titleBox}>
        <Text>Good morning</Text>
        <Text>{name}</Text>
      </View>
    </View>
  )
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired
}
