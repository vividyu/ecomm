import { useState } from "react";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
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