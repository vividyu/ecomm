import { useState } from "react";
import { Link } from 'react-router-dom';
import ikun from "../assets/ikun.png";
import './Login.css';

function Login() {
    return (
        <div className="login-container">
            <img className="ikun" src={ikun} alt="ikun"></img>
            <div>
                {"User: "}
                <input></input>
            </div>
            <div>
                {"Password: "}
                <input></input>
            </div>
            <div>
                <button>Sign in</button>
            </div>
            <Link className="back-link" to="/">Back</Link>
        </div>
    )
}
export default Login;