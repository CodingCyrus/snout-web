import { async } from "@firebase/util";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

export function Authentication() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    //create user accounts
    const register = async () => {
        //user promise, firebase function will automatically generate/add new user in authentication database
        //After use created will login user automnatically
        const user = await createUserWithEmailAndPassword()
    };
    const login = async () => {};
    const logout = async () => {};
}

