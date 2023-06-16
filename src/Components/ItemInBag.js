import { useState } from "react";
import './ItemInBag.css';

function Item({product}) {
    return (
        <div>
            <img className="prod-image" src={product.image} alt={product.title}></img>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <button>Delete from Bag</button>
        </div>
    );
}

export default Item;