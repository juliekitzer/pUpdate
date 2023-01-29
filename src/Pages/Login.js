import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';


function Login({isAuthenticated, setIsAuthenticated, user, setUser}) {

    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: "",
    })
    console.log(setIsAuthenticated);
    console.log(isAuthenticated);

  
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:3005/verification", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "username": loginInfo.username,
                    "password": loginInfo.password,
                }),
            });
            let resJson = await res.json();
            setUser(resJson);
            setIsAuthenticated(true);
            if (user.username != ""){
            navigate("/Dashboard")
            console.log('This is the test');
            }
            
            else{
                navigate("/Login")
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (field, val) => {
        setLoginInfo({
            ...loginInfo,
            [field]: val
        });
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" onChange={(e) => handleChange('username', e.target.value)} />
                <label>Password:</label>
                <input type="text" name="password"onChange={(e) => handleChange('password', e.target.value)} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;