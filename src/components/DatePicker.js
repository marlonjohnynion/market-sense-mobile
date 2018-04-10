import React from 'react'
import DatePicker from 'react-native-datepicker'

export const Picker = (props) => {
  const { onDateChange, selectedDate, minDate, maxDate } = props
  return (
    <DatePicker
      style={{position: 'relative'}}
      date={!selectedDate ? new Date() : selectedDate}
      mode="date"
      minDate={minDate}
      maxDate={maxDate}
      placeholder="Select Date"
      format="ll"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          width: 0,
          height: 0
        },
        dateInput: {
          borderWidth: 0
        }
      }}
      onDateChange={onDateChange}
    />
  )
}

export default Picker
