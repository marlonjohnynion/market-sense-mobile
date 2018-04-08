import React from 'react'
import DatePicker from 'react-native-datepicker'

export const Picker = (props) => {
  const { onDateChange, selectedDate } = props
  return (
    <DatePicker
      // style={{position: 'absolute', marginTop: 30, left: 0}}
      date={!selectedDate ? new Date() : selectedDate}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      minDate="2016-05-01"
      maxDate="2016-06-01"
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
