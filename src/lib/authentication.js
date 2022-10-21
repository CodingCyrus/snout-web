import { async } from "@firebase/util";
import { useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut 
} from "firebase/auth";
import { auth } from "./firebase"

export function Authentication() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({})

    //User Object State
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    //REGISTER API call, creates user account in firebase database
    const register = async () => {
        //user promise, firebase function will automatically generate/add new user in authentication database
        //After use created will login user automnatically
        try {
            const user = await createUserWithEmailAndPassword(
                auth, 
                registerEmail, 
                registerPassword
            );
            console.log(user)
        } catch (error) {
            console.error();
        }
    };

    //LOGIN, will only work if user has registered account
    const login = async () => { 
        try {
            const user = await signInWithEmailAndPassword(
                auth, 
                loginEmail, 
                loginPassword
            );
            console.log(user)
        } catch (error) {
            console.error();
        }
    };

    //LOGOUT API call
    const logout = async () => { 
        await signOut(auth);
    };
}

