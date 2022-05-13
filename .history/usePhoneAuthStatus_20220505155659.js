import React, { useState } from 'react';
import { getAuth, onAuthStateChanged,} from 'firebase/auth';

export default usePhoneAuthStatus = () => {
    const [isAuth, setIsAuth] = useState({pending: true})
    const auth = getAuth();

    onAuthStateChanged(auth, user => {
        if (user){
            setIsAuth({pending: false, status: true})
            alert("auth true")
        } else {
            setIsAuth({pending: false, status: false})
            alert("auth false")
        }
    })
    return {isAuth};
}