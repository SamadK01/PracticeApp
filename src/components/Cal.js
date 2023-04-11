import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Calendar } from 'react-native-calendars'

export default function Cal() {
    
  return (
    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'yellow',borderRadius:20,borderColor:'orange',borderWidth:4}}>
      <Calendar style={{borderRadius:22}} />
    </View>
  )
}