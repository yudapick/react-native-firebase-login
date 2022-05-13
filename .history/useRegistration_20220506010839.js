import React, { useState } from 'react';
import { getAuth, onAuthStateChanged,} from 'firebase/auth';

const idToken = getAuth().currentUser.getIdToken;
const isRegistered = () => { return null}
const registerUser = (user) => { return true}

export default useRegistration = () => {
    const [registeredUser, setRegisteredUser] = useState({pending: true})
    const auth = getAuth();

    onAuthStateChanged(auth, user => {
        if (user && registeredUser.pending) {
            updateIsRegisteredAsync()
        }
    })

    const updateIsRegisteredAsync = async () => {
        const response = await isRegistered()
        if (response) {
            setRegisteredUser({pending: false, user: response})
        } else {
            setRegisteredUser({pending: false, user: response})
        }
    }

    const register = async (user) => {
        const success = await registerUser(user)
    
        if (success) {
            setRegisteredUser(registerdUser)
        }
    }

    return {registeredUser: registeredUser, register: register};
}