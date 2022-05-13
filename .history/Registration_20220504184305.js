import React, { useRef, useState, useEffect } from 'react';
import {isRegistered, registerUser} from './RegistrationHttpService'

export default useRegistration = () => {
    const registeredUser = useRef(null)

    const isRegistered = () => {

    }

    const registerToServer = () => {

    }

    useEffect(() => {

    })

    const register = (registerdUser) => {
        // todo call the server
        setRegisteredUser(registerdUser)
    }

    return {registeredUser: registeredUser, register: register};
}