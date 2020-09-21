import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Checkbox } from 'react-native-material-ui'
import mpment from 'moment'
import PropTypes from 'prop-types'
import CustomCheckbox from '../CustomCheckbox'

const styles = StyleSheet.create({
  containerListItem: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#6495ED'
  },
  checkBox: {
    width: 20
  },
  title: {
    fontSize: 14,
    flex: 1
  },
  time:{
    fontSize: 12,
    color: '#6495ED',
    marginRight: 15
  }
})

export default function MedicationsListItems({ title, checked = false, onNavigateTo, onChecked = () => {}, time, id  }) {
  const _onChecked = () => onChecked(id, !checked)
  return (
    <TouchableOpacity style={styles.containerListItem} onPress={onNavigateTo}>
      <Text style={styles.time}>{mpment(time * 1000).format('hh:mm')}</Text>
      <Text style={styles.title}>{title}</Text>
      <CustomCheckbox checked={checked} onChecked={_onChecked} />
    </TouchableOpacity>
  )
}

MedicationsListItems.defaultProps = {
  checked: false,
  onNavigateTo: () => {}
}

MedicationsListItems.propTypes ={
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onNavigateTo: PropTypes.func,
  onChecked: PropTypes.func.isRequired
}

