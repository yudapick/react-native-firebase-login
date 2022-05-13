import { getAuth} from 'firebase/auth';

export default RegistrationHttpService = () => {

    const idToken = getAuth().currentUser.getIdToken;

    const isRegistered = () => { return null}
    const registerUser = (user) => { return true}

    return {isRegistered, registerUser}
}