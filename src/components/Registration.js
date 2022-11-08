import React, { useRef, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { auth } from '../context/firebase'

export default function Registration() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
            <form class="form-right">

                <h2 class="text-uppercase">Registration form</h2>

                <div class="form-outline mb-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        id="registerFirstName"
                        class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <input
                        type="text"
                        placeholder="Last Name"
                        id="registerLastName"
                        class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <input
                        type="email"
                        placeholder="Enter email"
                        id="registerEmail"
                        class="form-control"
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }} />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div class="form-outline mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        id="registerPassword"
                        class="form-control"
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }} />
                </div>

                <div class="form-outline mb-4">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        id="registerRepeatPassword"
                        class="form-control" />
                </div>

                <button onClick={register} type="button" class="btn btn-primary">Register Account</button>
            </form>
    );
}