import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import React from 'react';

export default function Profile({navigation}) {
  const route = useRoute();
  console.log('========', route.params?.data);
  const data2 = route.params?.data;
  const item = route.params?.data;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        
      <Text style={styles.txxt}>ID : {item.id} </Text>
      <Text style={styles.txxt}>First Name : {item.first_name} </Text>
      <Text style={styles.txxt}>Last Name : {item.last_name} </Text>
      <Text style={styles.txxt}>Email : {item.email} {'\n'} </Text>

      <Image
        style={{width: 200, height: 200, borderRadius: 400 / 2}}
        source={{uri: `${data2.avatar}`}}
      />

      <TouchableOpacity
        style={styles.buttonn}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}> Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonn: {
    backgroundColor: '#81dbae',
    padding: 12,
    borderRadius: 5,

    width: '50%',
    marginTop: 140,
  },
  txxt: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
