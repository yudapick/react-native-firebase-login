import { View, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { getAuth, onAuthStateChanged,} from 'firebase/auth';

import useRegistration from './useRegistration'
import usePhoneAuthStatus from './usePhoneAuthStatus'

import initialize from './firebaseInitializer';

import Home from './Home';
import Loading from './Loading';
import Registration from './Registration';
import PhoneAuth from './PhoneAuth';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

initialize();
const Stack = createNativeStackNavigator();
const auth = getAuth();

export default App = () => {

  const [isAuth, setIsAuth] = useState({pending: true})

  onAuthStateChanged(auth, user => {
      if (isAuth.pending){
        if (user){
          setIsAuth({pending: false, status: true})
          alert(isAuth.pending)
        } else {
          setIsAuth({pending: false, status: false})
          alert(isAuth.pending)
        }
      }
  })

  const {registeredUser, register} = useRegistration()
  //const {isAuth} = usePhoneAuthStatus()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          isAuth.pending || isAuth.status && registeredUser.pending ? <Stack.Screen name="Loading" component={Loading}/> : 
          !isAuth.status ? <Stack.Screen name="PhoneAuth" component={PhoneAuth}/> :
          !registeredUser.user ? <Stack.Screen name="Registration" component={Registration}/> :
          <Stack.Screen name="home" component={Home}/>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// import {Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions} from 'react-native';



// export default App = () => {

//   const {registeredUser, register} = useRegistration()
//   const {isAuth} = usePhoneAuthStatus()

//   const [modalVisible, setModalVisible] = useState(false);

//   // if isAuth.pending -> navigate loading component
//   // else if !isAuth -> navigate to phone auth component
//   // else if registeredUser.pending -> navigate loading component
//   // else if !registeredUser.user -> navigate to register component  
//   // else navigate home
  
//   return (
//     //<View><Text>yehudada</Text></View>
//     // <NavigationContainer>
//     //   <Stack.Navigator>
//     //   <Stack.Screen name="Loading" component={Text}/>
//     //     {/* {
//     //       isAuth.pending ? <Stack.Screen name="Loading" component={Loading}/> : 
//     //       !isAuth ? <Stack.Screen name="PhoneAuth" component={PhoneAuth}/> : 
//     //       registeredUser.pending ? <Stack.Screen name="Loading" component={Loading}/> : 
//     //       !registeredUser ? <Stack.Screen name="Registration" component={Registration}/> :
//     //       <Stack.Screen name="home" component={Home}/>
//     //     } */}
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//     //<Home/>
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
//   // return (
//   //   <View style={styles.centeredView}>
//   //     <Modal
//   //       animationType="slide"
//   //       transparent={true}
//   //       visible={modalVisible}
//   //       onRequestClose={() => {
//   //         Alert.alert('Modal has been closed.');
//   //         setModalVisible(!modalVisible);
//   //       }}>
//   //       <View style={styles.centeredView}>
//   //         <View style={styles.modalView}>
//   //           <Text style={styles.modalText}>Hello World!</Text>
//   //           <Pressable
//   //             style={[styles.button, styles.buttonClose]}
//   //             onPress={() => setModalVisible(!modalVisible)}>
//   //             <Text style={styles.textStyleWhite}>Hide Modal</Text>
//   //           </Pressable>
//   //         </View>
//   //       </View>
//   //     </Modal>
//   //     <Text style={styles.logoText}>Ringle</Text>
//   //     <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
//   //       <Text style={styles.textStyleColor}>המשך עם מספר טלפון</Text>
//   //     </Pressable>
//   //   </View>
//   // );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     backgroundColor: '#21DDB0',
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   logoText: {
//     marginBottom: windowHeight * 0.4,
//     color: 'white',
//     fontSize: 30,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalView: {
//     justifyContent: 'center',
//     width: windowWidth,
//     height: windowHeight * 0.85,
//     margin: 0,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//     shadowOpacity: 0.10,
//     shadowRadius: 3,
//     elevation: 5,
//   },
//   button: {
//     justifyContent: 'center',
//     marginBottom: windowHeight * 0.2,
//     width: windowWidth * 0.8,
//     height: windowHeight * 0.06,
//     borderRadius: 15,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#FFFFFF',
//   },
//   buttonClose: {
//     backgroundColor: '#21DDB0',
//   },
//   textStyleColor: {
//     color: '#21DDB0',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   textStyleWhite: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });