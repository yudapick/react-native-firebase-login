import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import initialize from './firebaseInitializer';
import Home from './Home';
import Loading from './Loading';
import Registration from './Registration';
import PhoneAuth from './PhoneAuth';
import { getAuth } from 'firebase/auth';
import { async } from '@firebase/util';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

initialize();
const Stack = createNativeStackNavigator();

export default App = () => {

  console.log('renderrrrrrrrrrrrr')

  const pending = 'pending'

  const [isAuth, setIsAuth] = useState(pending)
  const [serverUser, setServerUser] = useState(pending)
  const [initializing, setInitializing] = useState(true);

  const initUser = async () => {
    console.log('get user')
    const idToken = await getAuth().currentUser.getIdToken()
    setServerUser(null)
  }

  onAuthStateChanged = async (user) => {
    if (user){
        setIsAuth(true)
        if (initializing) setInitializing(false);
        initUser()
    } else {
        setIsAuth(false)
    }
  }

  useEffect(() => {
    const subscriber = getAuth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

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