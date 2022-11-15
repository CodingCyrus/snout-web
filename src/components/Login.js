import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { auth } from '../context/firebase'

export const Login = (props) => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    React.useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
    }, []);

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <form>
            <h2 className="text-uppercase">Login</h2>

            <div className="form-outline mb-4">
                <input
                    type="email"
                    placeholder="Email Address"
                    id="loginEmail"
                    className="form-control"
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }} />
            </div>

            <div className="form-outline mb-4">
                <input
                    type="password"
                    placeholder="Password"
                    id="loginPassword"
                    className="form-control"
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }} />
            </div>

            <button onClick={login} type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

            <h4>User Logged In: </h4>
            {user?.email}
            <button onClick={logout}>Sign Out</button>

            <div className="text-center">
                <p>Don't have an account? <button onClick={() => props.onFormSwitch('register')}>Registration</button></p>
            </div>

            <div>
                SNOUT HOMEPAGE
                <Link to="/">HOME</Link>
                <Link to="/login">LOGIN</Link>
                <Link to="/registration">REGISTER</Link>
            </div>
        </form>


    )
};

export default Login;