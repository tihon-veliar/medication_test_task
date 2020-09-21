import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#6495ED',
    alignItems: "center",
    marginTop: 15
  },
  titleView: {
    borderBottomWidth: 1,
    borderBottomColor: '#6495ED',
    width: "100%",
    justifyContent: "center",
    padding: 15
  },
  title :{
    fontSize: 15, 
    textAlign: "center"
  },
  subtitleView:{
    fontSize: 14, 
    textAlign: "center",
    padding: 15,
    minHeight: 80,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default function MassegeBox() {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Messages</Text>
      </View>
      <View style={styles.subtitleView}>
        <Text>
          No simptoms today
        </Text>
      </View>
    </View>
  )
}
