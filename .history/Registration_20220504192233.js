import React, { useRef, useState, useEffect } from 'react';
import {isRegistered, registerUser} from './RegistrationHttpService'
import { getAuth, onAuthStateChanged,} from 'firebase/auth';

export default useRegistration = () => {
    const [registeredUser, setRegisteredUser] = useState(null)
    const auth = getAuth();

    onAuthStateChanged(auth, user => {
        if (user){
            const response = await isRegistered()
            if (response) {
                setRegisteredUser(response)
            }
        }
    })

    const register = (user) => {
        const success = await registerUser(user)
    
        if (success) {
            setRegisteredUser(registerdUser)
        }
    }

    return {registeredUser: registeredUser, register: register};
}