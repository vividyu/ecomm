import { useState } from "react";
import Item from "./Item";
import './Ecomm.css'
import { Link } from 'react-router-dom';

function Ecomm() {
    const arr = new Array(9);
    for (let i = 0; i < 9; i++) {
        arr[i] = i + 1;
    }

    return (
        <div className="main-container">
            <nav>
                <input className="search-bar" placeholder="Search..."></input>
                <Link className="login-link" to="/login">Login</Link>
                <Link className="bag-link" to="/bag">Bag</Link>
            </nav>
            <div className="item-container">
                {arr.map(i => <Item title="basketball" price="2.5" />)}
            </div>
        </div>
    )
}

export default Ecomm;