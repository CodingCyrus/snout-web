import '../css/App.css'
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Registration } from "./Registration";
import { Login } from "./Login";

function App() {

    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

// {
//     currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Registration onFormSwitch={toggleForm}/>
// }