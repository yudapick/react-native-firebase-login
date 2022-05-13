import React, { useState } from 'react';
import {isRegistered, registerUser} from './RegistrationHttpService'
import { getAuth, onAuthStateChanged,} from 'firebase/auth';

export default useRegistration = () => {
    const [registeredUser, setRegisteredUser] = useState({pending: true})
    const auth = getAuth();

    onAuthStateChanged(auth, user => {
        if (user){
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

    const register = (user) => {
        const success = await registerUser(user)
    
        if (success) {
            setRegisteredUser(registerdUser)
        }
    }

    return {registeredUser: registeredUser, register: register};
}