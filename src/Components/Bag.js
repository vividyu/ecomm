import { useState, useEffect } from "react";
import ItemInBag from "./ItemInBag";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Bag() {
    const [prods, setProds] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                `https://fakestoreapi.com/products`
            );
            setProds(response.data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <div className="item-container">
                {prods.slice(0, 6).map(product => <ItemInBag key={product.id} product={product} />)}
            </div>
            <Link className="back-link" to="/">Back</Link>
        </div>
    )
}
export default Bag;