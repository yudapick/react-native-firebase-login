import React, { memo, useState } from 'react';
import { getAuth} from 'firebase/auth';

export default usePhoneAuthStatus = () => {
    const [isAuth, setIsAuth] = useState({pending: true, status: false})
    console.log('usephonestatus called')
    getAuth().onAuthStateChanged(user => {
        if (user){
          setIsAuth({pending: false, status: true})
        } else {
          setIsAuth({pending: false, status: false})
        }
    })
    
    return memo(isAuth);
}