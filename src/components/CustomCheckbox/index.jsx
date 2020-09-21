import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-material-ui'
import PropTypes from 'prop-types'


export default function CustomCheckbox({ checked, onChecked }) {
  const iconName = checked ? "check-box" :  "check-box-outline-blank"
  return ( 
    <TouchableOpacity onPress={onChecked}>
      <Icon name={iconName} color="#6495ED" />
    </TouchableOpacity>
  )
}

CustomCheckbox.propTypes ={
  checked: PropTypes.bool.isRequired,
  onChecked: PropTypes.func.isRequired
}


