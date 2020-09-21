import React, { useMemo }from 'react'
import { View, Text, StyleSheet } from "react-native"
import moment from "moment"
import PropTypes from 'prop-types'


const styles = StyleSheet.create({
  container: {
    // width: "100%",
    height: 200,
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: '#6495ED',
    margin: 20
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center"
  },
  timeTitle: {
    fontSize: 14,
    paddingTop: 5,
    textAlign: "center"
  }
})

export default function MedicationsItem({ name, timeOfReceipt }) {
  const time = useMemo(() => {
    const timeOb = new Date(timeOfReceipt * 1000)

     return {
       h: timeOb.getHours(), 
       m: timeOb.getMinutes()
     }
  }, [timeOfReceipt])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.timeTitle}>{moment(timeOfReceipt * 1000).format('h:mm')}</Text>
    </View>
  )
}

MedicationsItem.propTypes ={
  name: PropTypes.string.isRequired,
  timeOfReceipt: PropTypes.string.isRequired
}
