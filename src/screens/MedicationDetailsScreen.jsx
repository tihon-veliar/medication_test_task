import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MedicationsItem from '../components/MedicationsItem'


const MedicationDetailsScreen = ({ route }) => {
  const { params } = route
  return (
    <View>
      {
        params && params.medication && (
          <MedicationsItem 
            name={params.medication.name}
            timeOfReceipt={params.medication.time}
          />
        )
      }
    </View>)
}

export default MedicationDetailsScreen
