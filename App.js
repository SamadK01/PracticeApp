// abc

import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Showdata from './src/Showdata';
import Check from './src/Check';
import Profile from './src/Profile';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Showdata"
          component={Showdata}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Check"
          component={Check}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}






// import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
// import React, {useState} from 'react';
// import MyBtn from './src/components/MyBtn';
// import axios from 'axios';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// // import Showdata from './src/Showdata';

// // const Stack = createStackNavigator();

// export default function App() {
//   const [data, setData] = useState([]);
//   const baseURL = 'https://reqres.in';
//   const getAPI = () => {
//     console.log('GET');
//     axios({
//       method: 'GET',

//       url: `${baseURL}/api/users?page=1`,
//     })
//       .then(res => setData(res.data.data))
//       .catch(err => console.log(err));
//   };
//   return (
//     <View style={{flex: 1}}>
//       <Text style={{fontSize: 40}}>Fetch Data From API and Show On Click</Text>

//       <MyBtn title="GET" Press={getAPI} />

//       <FlatList
//         data={data}
//         ListEmptyComponent={() => (
//           <Text style={{textAlign: 'center', fontSize: 30}}>No Data</Text>
//         )}
//         showsVerticalScrollIndicator={false}
//         renderItem={({item}) => (
//           <TouchableOpacity
//             style={{
//               backgroundColor: 'yellow',
//               marginBottom: 20,
//               marginTop: 5,
//               padding: 10,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Text style={{fontSize: 22, color: 'black',fontWeight:'700'}}>
//               Name: {item.first_name}{' '}
//             </Text>

//             <Text style={{fontSize: 22, color: 'black', marginTop: -60}}>
//               {' '}
//               {
//                 <Image
//                   style={{width: 200, height: 200}}
//                   source={{uri: `${item.avatar}`}}
//                 />
//               }{' '}
//               {'\n'}
//             </Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }












//Task done data fetch from API
// import {View, Text , FlatList } from 'react-native';
// import React, {useState} from 'react';
// import MyBtn from './src/components/MyBtn';
// import axios from 'axios';

// export default function App() {
//   const [data, setData] = useState([]);
//   const baseURL = 'https://reqres.in';
//   const getAPI = () => {
//     console.log('GET')
//     axios({
//       method: 'GET',

//       url: `${baseURL}/api/users?page=1`,
//     })
//       .then(res => setData(res.data.data))
//       .catch(err => console.log(err));
//   };
//   return (
//     <View style={{flex: 1}}>

//       <Text style={{fontSize: 40}}>Fetch Data From API</Text>

//       <MyBtn title="GET" Press={getAPI} />

//       <FlatList
//         data={data}
//         ListEmptyComponent={() => (
//           <Text style={{textAlign:'center',fontSize:30}}>
//             No Data
//           </Text>
//         )}

//         showsVerticalScrollIndicator={false}
//         renderItem = {({item}) => <View style={{paddingHorizontal:10}}>

//           <Text style={{fontSize:22,color:'black',backgroundColor:'red'}}>{'\n'} ID: {item.id}   </Text>

//           <Text style={{fontSize:22,color:'black'}}>Email: {item.email}</Text>
//           <Text style={{fontSize:22,color:'black',}}>First_name: {item.first_name}</Text>
//           <Text style={{fontSize:22,color:'black',}}>Last_name: {item.last_name}</Text>
//           <Text style={{fontSize:22,color:'black',}}>Avatar: {item.avatar}</Text>
//            </View> }

//       />

//     </View>
//   );
// }






// fetch data through api
// import {View, Text , FlatList } from 'react-native';
// import React, {useState} from 'react';
// import MyBtn from './src/components/MyBtn';
// import axios from 'axios';

// export default function App() {
//   const [data, setData] = useState([]);
//   const baseURL = 'https://reqres.in';
//   const getAPI = () => {
//     console.log('GET')
//     axios({
//       method: 'GET',

//       url: `${baseURL}/api/users?page=2`,
//     })
//       .then(res => setData(res.data.data))
//       .catch(err => console.log(err));
//   };
//   return (
//     <View style={{flex: 1}}>
//       <Text style={{fontSize: 40}}>Fetch Data From API</Text>

//       <MyBtn title="GET" Press={getAPI} />

//       <FlatList
//         data={data}
//         ListEmptyComponent={() => (
//           <Text style={{textAlign:'center',fontSize:30}}>
//             No Data
//           </Text>
//         )}

//         showsVerticalScrollIndicator={false}
//         renderItem = {({item}) => <View style={{paddingHorizontal:10}}>
//           <Text style={{fontSize:22,color:'black',}}>ID: {item.id}</Text>
//           <Text style={{fontSize:22,color:'black',}}>Email: {item.email}</Text>
//           <Text style={{fontSize:22,color:'black',}}>First_name: {item.first_name}</Text>
//           <Text style={{fontSize:22,color:'black',}}>Last_name: {item.last_name}</Text>
//           <Text style={{fontSize:22,color:'black',}}>Avatar: {item.avatar}</Text>
//            </View> }

//       />

//     </View>
//   );
// }










// data get from dummy API
// import {View, Text , FlatList } from 'react-native';
// import React, {useState} from 'react';
// import MyBtn from './src/components/MyBtn';
// import axios from 'axios';

// export default function App() {
//   const [data, setData] = useState([]);
//   const baseURL = 'https://jsonplaceholder.typicode.com';
//   const getAPI = () => {
//     axios({
//       method: 'GET',
//       url: `${baseURL}/posts`,
//     })
//       .then(res => setData(res.data))
//       .catch(err => console.log(err));
//   };
//   return (
//     <View style={{flex: 1}}>
//       <Text style={{fontSize: 40}}>Fetch Data From API</Text>

//       <MyBtn title="GET" Press={getAPI} />

//       <FlatList
//         data={data}
//         ListEmptyComponent={() => (
//           <Text style={{textAlign:'center',fontSize:30}}>
//             No Data
//           </Text>
//         )}

//         showsVerticalScrollIndicator={false}
//         renderItem = {({item}) => <View style={{paddingHorizontal:10}}>
//           <Text style={{fontSize:22,color:'black',}} >ID: {item.id}</Text>
//           <Text style={{fontSize:22,color:'black',}} numberOfLines={1}>Title: {item.title}</Text>
//           <Text style={{fontSize:22,color:'black',}} numberOfLines={1}>Body: {item.body}</Text>
//           {/* <Text style={{fontSize:22,color:'black',}}>Last_name: {last_name}</Text>
//           <Text style={{fontSize:22,color:'black',}}>Avatar: {item.avatar}</Text> */}
//            </View> }

//       />

//     </View>
//   );
// }










// import React, {useState} from 'react';
// import { View, Text ,TouchableOpacity,Modal,Button} from 'react-native'
// import { Calendar } from 'react-native-calendars'
// import MyBtn from './src/components/MyBtn';

// export default function App() {
//   const [showmodel,setshowmodel] = useState(false);
//   return (
//     <View style={{
//                flex: 1,
//                justifyContent: 'center',
//                alignItems: 'center',
//                backgroundColor: 'yellow',
//                borderColor: 'orange',
//                borderWidth: 10,
//              }}>
//          <MyBtn bgcolor={'yellowgreen'} txt={'Login'}  />
//        <Text></Text>
//       <MyBtn bgcolor={'green'} txt={'Sign Up'} />
//       <Text></Text>
//       <TouchableOpacity onPress={() => setshowmodel(true)} style={{backgroundColor:'black',borderRadius:10,alignItems:'center',padding:20}}>
// <Text style={{color:'white',fontSize:22}}>Show Calendar</Text>
//       </TouchableOpacity>

//       <Modal visible={showmodel}>
//         <Calendar />

//       </Modal>
//     </View>
//   )
// }








// import React from 'react';
// import {View, Text, Modal} from 'react-native';
// import MyBtn from './src/components/MyBtn';
// import Cal from './src/components/Cal';

// const App = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'yellow',
//         borderColor: 'orange',
//         borderWidth: 10,
//       }}>
//       <MyBtn bgcolor={'red'} txt={'Show Calendar'}  />
//       <Text></Text>
//       <MyBtn bgcolor={'green'} txt={'Hide Calendar'} />
//       <Text></Text>

//       {/* <Modal visible={showmodel}>
//       <Cal />
//       </Modal> */}
//     </View>
//   );
// };

// export default App;

// import { View, Text } from 'react-native'
// import React from 'react'

// const App = () => {
//   return(
//     <View>
//       <Text>complex function</Text>
//     </View>
//   );
// };
// export default App;











// // class component in react native
// import { View, Text } from 'react-native'
// import React, { Component } from 'react'

// export default class App extends Component{
//   constructor(props) {
//     super(props);
//   }

//   render(){
//     return(
//       <View>
//         <Text style={{backgroundColor:'red'}}></Text>
//         <Text style={{textAlign:'center',fontSize:30}}>  Hello App</Text>
//         <Text style={{backgroundColor:'red'}}></Text>

//       </View>
//     )
//   }
// }

// button on alert box
// import { View, Text ,Button,Alert} from 'react-native'
// import React from 'react'

// export default function App() {
//   return (
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Button
//         title="Delete Record"
//         onPress={() => Alert.alert(
//           'Your Record',
//           'no record for deleting ',
//           [
//             {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
//             {text: 'OK', onPress: this.onDeleteBTN},
//           ],
//           { cancelable: false }
//         )}
//       />
//     </View>
//   )
// }

// array function
// import React, { Component } from 'react';
// import { View, Text, FlatList } from 'react-native';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
//     };
//   }

//   renderItem = ({ item }) => (
//     <View style={{ padding: 20 }}>
//       <Text>{item}</Text>
//     </View>
//   );

//   render() {
//     return (
//       <View styles={{ flex: 1 }}>
//         <FlatList
//           data={this.state.data}
//           renderItem={this.renderItem}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//     );
//   }
// }

// simple for scroll
// import { View, Text, ScrollView } from 'react-native'
// import React from 'react'

// export default function App() {
//   return (
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//   <ScrollView>
//   <Text style={{fontSize:60}}>App</Text>
//       <Text style={{fontSize:60}}>App</Text>
//       <Text style={{fontSize:60}}>App</Text>
//       <Text style={{fontSize:60}}>App</Text>
//       <Text style={{fontSize:60}}>App</Text>
//       <Text style={{fontSize:60}}>App</Text>
//       <Text style={{fontSize:60}}>App</Text>
//       <Text style={{fontSize:60}}>App</Text>
//       <Text style={{fontSize:60}}>App</Text>
//       <Text style={{fontSize:60}}>App</Text>
//       <Text style={{fontSize:60}}>App</Text>
//       <Text style={{fontSize:60}}>App</Text>
//       <Text style={{fontSize:60}}>App</Text>
//       <Text style={{fontSize:60}}>App</Text>
//       <Text style={{fontSize:60}}>App</Text>
//       <Text style={{fontSize:60}}>App</Text>
//       <Text style={{fontSize:60}}>App</Text>
//   </ScrollView>

//     </View>
//   )
// }
