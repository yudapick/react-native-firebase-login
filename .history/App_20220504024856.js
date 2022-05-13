import { initializeApp } from 'firebase/app';
import {Text, View} from 'react-native';

const firebaseConfig = {
    apiKey: "AIzaSyAZA_yiwVb5GSmZW9gV17woE3LU4_73-GM",
    authDomain: "godteach-711f0.firebaseapp.com",
    projectId: "godteach-711f0",
    storageBucket: "godteach-711f0.appspot.com",
    messagingSenderId: "981217599395",
    appId: "1:981217599395:web:7a5480655c5ab6c704c416"
  };
  
initializeApp(firebaseConfig);

export default function app() {
    return (<View>{(() => {
      if (false){
          return (
              <Text>yuda</Text>
          )
      } else {
        return(
          <Text>david</Text>
        )
      }
      
      return null;
    })()}</View>)
}