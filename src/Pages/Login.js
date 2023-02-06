import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../stylesheets/style.css";
import "../stylesheets/loginStyle.css";


function Login({ isAuthenticated, setIsAuthenticated, user, setUser }) {

    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: "",
    })

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
            if (user.username != "") {
                navigate("/Dashboard")

            }

            else {
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
        <div class="login">
            <center>
                <div className="tile is-parent-tile is-4 centered">
                    <article className="tile is-child notification is-primary">
                        <div>
                            <h1 className="subtitle">Login</h1>
                            <form onSubmit={handleSubmit}>
                                <ul>
                                    <li><label>Username:</label></li>
                                    <li>
                                        <input className="input is-rounded is-primary" type="text" placeholder="Username" name="username" onChange={(e) => handleChange('username', e.target.value)} />
                                    </li>
                                    <li>
                                        <label htmlFor="password">Password:</label>
                                    </li>
                                    <li>
                                        <input className="input is-rounded is-primary" type="password" placeholder="Password" id="password" name="password" onChange={(e) => handleChange('password', e.target.value)} />
                                    </li>
                                </ul>
                                <button type='submit' className="button is-light">Login</button>
                            </form>
                        </div>
                    </article>
                </div>
            </center>
        </div>
    )
}

export default Login;