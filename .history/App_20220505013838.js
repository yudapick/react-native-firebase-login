import {Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions} from 'react-native';
import React, { useState } from 'react';
import useRegistration from './useRegistration'
import usePhoneAuthStatus from './usePhoneAuthStatus'
import { initializeApp } from "firebase/app";
import loadingComponent from './LoadingComponent';
import registrationComponent from './RegistrationComponent';
import homeComponent from './HomeComponent';
import NavigationContainer from '@react-navigation/native';
import phoneAuthComponent from './phoneAuthComponent';
import HomeComponent from './HomeComponent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

initializeApp({
  apiKey: "AIzaSyAZA_yiwVb5GSmZW9gV17woE3LU4_73-GM",
  authDomain: "godteach-711f0.firebaseapp.com",
  projectId: "godteach-711f0",
  storageBucket: "godteach-711f0.appspot.com",
  messagingSenderId: "981217599395",
  appId: "1:981217599395:web:7a5480655c5ab6c704c416"
});

const Stack = createNativeStackNavigator();

export default App = () => {

  const {registeredUser, register} = useRegistration()
  const {isAuth} = usePhoneAuthStatus()

  const [modalVisible, setModalVisible] = useState(false);

  // if isAuth.pending -> navigate loading component
  // else if !isAuth -> navigate to phone auth component
  // else if registeredUser.pending -> navigate loading component
  // else if !registeredUser.user -> navigate to register component  
  // else navigate home
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          isAuth.pending ? <Stack.Screen name="loading" loadingComponent/> : 
          !isAuth ? <Stack.Screen name="phoneAuth" phoneAuthComponent/> : 
          registeredUser.pending ? <Stack.Screen name="loading" loadingComponent/> : 
          !registeredUser ? <Stack.Screen name="registration" registrationComponent/> :
          <Stack.Screen name="home" homeComponent/>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
  // return (
  //   <View style={styles.centeredView}>
  //     <Modal
  //       animationType="slide"
  //       transparent={true}
  //       visible={modalVisible}
  //       onRequestClose={() => {
  //         Alert.alert('Modal has been closed.');
  //         setModalVisible(!modalVisible);
  //       }}>
  //       <View style={styles.centeredView}>
  //         <View style={styles.modalView}>
  //           <Text style={styles.modalText}>Hello World!</Text>
  //           <Pressable
  //             style={[styles.button, styles.buttonClose]}
  //             onPress={() => setModalVisible(!modalVisible)}>
  //             <Text style={styles.textStyleWhite}>Hide Modal</Text>
  //           </Pressable>
  //         </View>
  //       </View>
  //     </Modal>
  //     <Text style={styles.logoText}>Ringle</Text>
  //     <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
  //       <Text style={styles.textStyleColor}>המשך עם מספר טלפון</Text>
  //     </Pressable>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: '#21DDB0',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoText: {
    marginBottom: windowHeight * 0.4,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalView: {
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight * 0.85,
    margin: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.10,
    shadowRadius: 3,
    elevation: 5,
  },
  button: {
    justifyContent: 'center',
    marginBottom: windowHeight * 0.2,
    width: windowWidth * 0.8,
    height: windowHeight * 0.06,
    borderRadius: 15,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#FFFFFF',
  },
  buttonClose: {
    backgroundColor: '#21DDB0',
  },
  textStyleColor: {
    color: '#21DDB0',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyleWhite: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});