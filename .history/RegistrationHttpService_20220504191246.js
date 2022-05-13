import { getAuth, onAuthStateChanged,} from 'firebase/auth';

export default RegistrationHttpService = () => {

    const auth = getAuth();

    onAuthStateChanged(auth, user => {
        if (user){
            user.getToken()
            // todo call isRegistered
        }
    })

    const isRegistered = () => { return {name: ""}}
    const registerUser = (user) => {}

    return {isRegistered, registerUser}
}