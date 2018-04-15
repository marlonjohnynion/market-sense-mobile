import React from 'react'
import { StyleSheet } from 'react-native'
import DatePicker from 'react-native-datepicker'

export const Picker = (props) => {
  const { onDateChange, selectedDate, minDate, maxDate } = props
  return (
    <DatePicker
      style={styles.container}
      date={!selectedDate ? new Date() : selectedDate}
      mode="date"
      minDate={minDate}
      maxDate={maxDate}
      placeholder="Select Date"
      format="ll"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={pickerCustomStyle}
      onDateChange={onDateChange}
    />
  )
}

const pickerCustomStyle = {
  dateIcon: {
    width: 0,
    height: 0
  },
  dateInput: {
    borderWidth: 0
  }
}

const styles = StyleSheet.create({
  container: {position: 'relative'}
})

export default Picker
