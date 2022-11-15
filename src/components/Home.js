import React, { useContext, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../context/firebase'
import { Nav } from 'react-bootstrap';

export const Home = () => {

    const [goToLogin, setGoToLogin] = React.useState(false);
    const [goToRegister, setGoToRegister] = React.useState(false);

    const [user, setUser] = useState({});

    React.useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
    }, []);

    const logout = async () => {
        await signOut(auth);
    };

    if (goToLogin) {
        return <Navigate to="/login" />;
    }

    if (goToRegister) {
        return <Navigate to="/registration" />;
    }


    return (

        <div>

            <div>
                <h1>SNOUT HOMEPAGE</h1>
            </div>

            <h4>User Logged In: {user?.email}</h4>
            

            <button onClick={() => { setGoToLogin(true) }}>{" "} Login</button>
            <button onClick={() => { setGoToRegister(true) }}>{" "} Register</button>
            <button onClick={logout}>Sign Out</button>

        </div>

    )
};

export default Home;

{/* <Link to="/">HOME</Link>
<Link to="/login">LOGIN</Link>
<Link to="/registration">REGISTER</Link> */}