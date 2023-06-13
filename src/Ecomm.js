import { useState } from "react";
import Item from "./Item";
import './Ecomm.css'

function Ecomm() {
    const arr = new Array(9);
    for (let i = 0; i < 9; i++) {
        arr[i] = i + 1;
    }

    return (
        <div>
            <input placeholder="Search..."></input>
            <button>Login</button>
            <button>Bag</button>
            <div className="item-container">
                {arr.map(i => <Item title="basketball" price="2.5" />)}
            </div>
        </div>
    )
}

export default Ecomm;