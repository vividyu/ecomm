import { useState, useEffect } from "react";
import Item from "./Item";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Bag() {
    const arr = new Array(6);
    for (let i = 0; i < 6; i++) {
        arr[i] = i + 1;
    }

    return (
        <div>
            <div className="item-container">
                {arr.map(i => <Item title="dance" price="2.5" />)}
            </div>
            <Link className="back-link" to="/">Back</Link>
        </div>
    )
}
export default Bag;