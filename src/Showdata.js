import {View, Text, Button, StyleSheet, TouchableOpacity,ImageBackground} from 'react-native';
import React from 'react';
import Check from './Check';
export default function Showdata({navigation}) {
  return (
    <ImageBackground source={require('../image/abc.jpg')} resizeMode="cover" style={styles.image}>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={styles.btnback}
        onPress={() => navigation.navigate('Check')}>
        <Text style={styles.buttonText}>User Profiles</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  btnback: {
    backgroundColor: '#64756d',
    padding: 22,
    borderRadius: 5,
    width: '50%',
    
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
