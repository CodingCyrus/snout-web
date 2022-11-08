/*
* OLD VERSION OF AUTHENTICATION USE authentication.js instead
* Leave this file as reference for certain calls for registrations, login, logout, etc
**/

// import React, { useContext, useState, useEffect } from 'react'
// import { 
//   createUserWithEmailAndPassword, 
//   onAuthStateChanged, 
//   signInWithEmailAndPassword, 
//   signOut 
// } from "firebase/auth";

// const AuthContext = React.createContext()

// export function useAuth() {
//     return useContext(AuthContext)
// }

// export default function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState()

//   function signUp(email,password) {
//     createUserWithEmailAndPassword(email, password)
//   }
  
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(user => {
//       setCurrentUser(user)
//     })
//     return unsubscribe
//   }, [])

//   const value = {
//     currentUser,
//     signUp
//   }  

//   return (
//     <AuthContext.Provider value={value}>
//         {children}
//     </AuthContext.Provider>
//   )
// }

// const AuthContext = React.createContext()

// export function useAuth() {
//     return useContext(AuthContext)
// }

// export function Authentication() {

//     const [registerEmail, setRegisterEmail] = useState("");
//     const [registerPassword, setRegisterPassword] = useState("");
//     const [loginEmail, setLoginEmail] = useState("");
//     const [loginPassword, setLoginPassword] = useState("");

//     const [user, setUser] = useState({})

//     //User Object State
//     onAuthStateChanged(auth, (currentUser) => {
//         setUser(currentUser);
//     })

//     //REGISTER API call, creates user account in firebase database
//     //https://javascript.plainenglish.io/firebase-authentication-with-firestore-database-78e6e4f348c6
//     const register = async () => {
//         //user promise, firebase function will automatically generate/add new user in authentication database
//         //After use created will login user automnatically
//         //OLD CODE USER REGISTER AUTHENTICATION WITHOUT STORING INFO INTO FIRESTORE COLLECTION
//         try {
//             const user = await createUserWithEmailAndPassword(
//                 auth, 
//                 registerEmail, 
//                 registerPassword
//             );
//             console.log(user)
//         } catch (error) {
//             console.error();
//         }
//     };

//     //LOGIN, will only work if user has registered account
//     const login = async () => { 
//         try {
//             const user = await signInWithEmailAndPassword(
//                 auth, 
//                 loginEmail, 
//                 loginPassword
//             );
//             console.log(user)
//         } catch (error) {
//             console.error();
//         }
//     };

//     //LOGOUT API call
//     const logout = async () => { 
//         await signOut(auth);
//     };
// }
