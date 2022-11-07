import { async, FirebaseError } from "@firebase/util";
import { useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut 
} from "firebase/auth";
import { auth } from "./firebase"
import * as functions from "firebase-functions"


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
    //https://javascript.plainenglish.io/firebase-authentication-with-firestore-database-78e6e4f348c6
    const register = async () => {
        //user promise, firebase function will automatically generate/add new user in authentication database
        //After use created will login user automnatically
        //OLD CODE USER REGISTER AUTHENTICATION WITHOUT STORING INFO INTO FIRESTORE COLLECTION
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


//Store Users In Firestore Using Firebase Authentication
//https://ilikekillnerds.com/2020/08/how-to-store-users-in-firestore-using-firebase-authentication/
// export const createUser = functions.auth.user().onCreate((user) => {
//     const { uid, displayName, email } = user;

//     return admin.firestore()
//         .collection('users')
//         .doc(uid)
//         .set({ uid, displayName, email })
// });

// export const deleteUser = functions.auth.user().onDelete((user) => {
//     return admin.firestore()
//         .collection('users')
//         .doc(user.uid)
//         .delete();
// });
