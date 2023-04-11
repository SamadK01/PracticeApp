import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button,Modal} from 'react-native';


export default function MyBtn({bgcolor, title,Press}) {
  const [showmodel,setshowmodel] = useState(false);
  return (
    <TouchableOpacity
      style={{
    marginLeft:90,
        backgroundColor: 'green',
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 10,
        width:'50%',
        justifyContent:'center',
        alignItems:'center'
      }} onPress={Press}>
      <Text style={{fontSize: 20,color:'white'}}>{title}</Text>
    </TouchableOpacity>
  );
}
