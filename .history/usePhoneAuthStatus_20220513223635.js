import React, { useState } from 'react';
import { getAuth, onAuthStateChanged,} from 'firebase/auth';

export default usePhoneAuthStatus = () => {
    const [isAuth, setIsAuth] = useState({pending: true, status: false})
    const auth = getAuth();

    onAuthStateChanged(auth, user => {
        if (isAuth.pending){ // in the first time
          if (user){
            setIsAuth({pending: false, status: true})
          } else {
            setIsAuth({pending: false, status: false})
          }
        } else { // in next time
          if (user && !isAuth.status){
            setIsAuth({pending: false, status: true})
          } else if (!user && isAuth.status){
            setIsAuth({pending: false, status: false})
          }
        }
    })
    
    return {isAuth};
}