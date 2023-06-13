import { useState } from "react";
import ikun from "../assets/ikun.png";

function Item({title, price}) {

    return (
        <div>
            <img src={ikun} alt=""></img>
            <p>Title: {title}</p>
            <p>Price: {price} years</p>
            <button>Add to Bag</button>
        </div>
    );
}

export default Item;