import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import MedicationsListItems from '../components/MedicationsListItems'

import { checkedMed } from "../redux/actions"


const MedicationScreen = ({ navigation }) => {
  const madicationList = useSelector((state) => state.madicationList)
  const dispatch = useDispatch()
  const onChecked = (id, teken) => {
    dispatch(checkedMed(id, teken))
  }
  return (
    <View>
      <ScrollView>
        {madicationList && madicationList.length && madicationList.map(item => (
          <MedicationsListItems
            title={item.name}
            checked={item.taken}
            time={item.time}
            id={item.id}
            key={item.id}
            onNavigateTo={() => navigation.navigate('MedicationDetails', { medication: item })}
            onChecked={onChecked}
          />
        )) }
      </ScrollView>
    </View>)
}

export default MedicationScreen
