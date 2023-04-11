import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Check({navigation}) {
  const [data, setData] = useState([]);
  const baseURL = 'https://reqres.in';
  const getAPI = () => {
    console.log('GET');
    axios({
      method: 'GET',
      url: `${baseURL}/api/users?page=1`,
    })
      .then(res => setData(res.data.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getAPI();
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Profile', {data: item})}
      style={styles.touche}>
      <Text style={{fontSize: 22, color: 'black', marginTop: -67, flex: 1}}>
        {' '}
        {
          <Image
            style={{width: 200, height: 150, borderRadius: 200}}
            source={{uri: `${item.avatar}`}}
          />
        }{' '}
        {'\n'}
      </Text>

      <Text
        style={{
          fontSize: 30,
          color: 'black',
          fontWeight: '700',
          flex: 1,
          marginLeft: 20,
        }}>
        {item.first_name}{' '}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  touche: {
    backgroundColor: '#c2dec1',
    marginBottom: 20,
    marginTop: 7,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    marginLeft: 20,
    marginRight: 20,
    elevation: 2,
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
});
