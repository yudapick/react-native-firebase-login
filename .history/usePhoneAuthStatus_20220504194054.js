import React, { useState } from 'react';
import { getAuth, onAuthStateChanged,} from 'firebase/auth';

export default usePhoneAuthStatus = () => {
    const [isAuth, setIsAuth] = useState(false)
    const auth = getAuth();

    onAuthStateChanged(auth, user => {
        if (user){
            setIsAuth(true)
        }
    })
    return {isAuth};
}