import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from '../context/firebase'

export function Registration(props) {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [user, setUser] = useState({});

    React.useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
    }, []);

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
        <form className="form-right">

            <h2 className="text-uppercase">Registration</h2>

            <div className="form-outline mb-4">
                <input
                    type="text"
                    placeholder="First Name"
                    id="registerFirstName"
                    className="form-control" />
            </div>

            <div className="form-outline mb-4">
                <input
                    type="text"
                    placeholder="Last Name"
                    id="registerLastName"
                    className="form-control" />
            </div>

            <div className="form-outline mb-4">
                <input
                    type="email"
                    placeholder="Enter email"
                    id="registerEmail"
                    className="form-control"
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-outline mb-4">
                <input
                    type="password"
                    placeholder="Password"
                    id="registerPassword"
                    className="form-control"
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }} />
            </div>

            <div className="form-outline mb-4">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    id="registerRepeatPassword"
                    className="form-control" />
            </div>

            <button onClick={register} type="button" className="btn btn-primary">Register Account</button>

            <div className="text-center">
                <p>Already have an account? <button onClick={() => props.onFormSwitch('login')}>Sign In</button></p>
            </div>

            <div>
                SNOUT HOMEPAGE
                <Link to="/">HOME</Link>
                <Link to="/login">LOGIN</Link>
                <Link to="/registration">REGISTER</Link>
            </div>
        </form>
    );
};

export default Registration;