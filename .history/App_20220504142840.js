import { initializeApp } from 'firebase/app';
import {Text, View} from 'react-native';
import * as React from 'react';

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
    const [status, setStatus] = React.useState(1)


    const array = [1,2,3]
    alert(array.map(value => {value+1}))


    return (<View>{(() => {
      switch(status) {
        case 1:
          return (
            <Text>dddddddd</Text>
          )
        case "y":
          return(
            <Text>ffffffffff</Text>
          )
        default:
          return(
            <Text>rrrrrrrrrr</Text>
          )
      }
    })()}</View>)
}