import { async, FirebaseError } from "@firebase/util";
import { useState, useContext, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";


export function Authentication() {


    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {

    };

    const logout = async () => {

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
