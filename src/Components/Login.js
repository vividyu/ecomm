import { useState } from "react";
import { Link } from 'react-router-dom';
import ikun from "../assets/ikun.png";
import './Login.css';

function Login() {
    return (
        <div className="login-container">
            <img className="ikun" src={ikun} alt="ikun"></img>
            <div className="input-box">
                {"User: "}
                <input></input>
            </div>
            <div className="input-box">
                {"Password: "}
                <input></input>
            </div>
            <div className="input-box">
                <button>Sign in</button>
            </div>
            <Link className="back-link" to="/">Back</Link>
        </div>
    )
}
export default Login;