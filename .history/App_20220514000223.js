import { View, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import initialize from './firebaseInitializer';
import Home from './Home';
import Loading from './Loading';
import Registration from './Registration';
import PhoneAuth from './PhoneAuth';
import { getAuth } from 'firebase/auth';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

initialize();
const Stack = createNativeStackNavigator();

export default App = () => {

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const pending = 'pending'

  const [isAuth, setIsAuth] = useState(pending)
  const [serverUser, setServerUser] = useState(pending)

  const getUser = async () => {
    const idToken = await getAuth().currentUser.getIdToken()
    console.log(idToken)
    setServerUser(null)
  }

  getAuth().onAuthStateChanged(user => {
      if (user){
        getUser();
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          isAuth == pending || isAuth && serverUser == pending ? 
          <Stack.Screen name="Loading" component={Loading} options={{ headerShown:false}}/> 
          : !isAuth ? 
          <Stack.Screen name="PhoneAuth" component={PhoneAuth} options={{ headerShown:false}}/> 
          : !serverUser ? 
          <Stack.Screen name="Registration" component={Registration} options={{ headerShown:false}}/> 
          : 
          <Stack.Screen name="home" component={Home} options={{ headerShown:false}}/>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}