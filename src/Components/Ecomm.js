import React, { useState, useEffect } from 'react';
import './Ecomm.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import Item from './Item';

function Ecomm() {
    const [prods, setProds] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(
                `https://fakestoreapi.com/products`
              );
              setProds(response.data);
        }
        fetchData();
    }, []);

    return (
        <div className="main-container">
            <nav className='nav-container'>
                <input className="search-bar" placeholder="Search..." />
                <Link className="login-link" to="/login">Login</Link>
                <Link className="bag-link" to="/bag">Bag</Link>
            </nav>
            <div className="item-container">
                {prods.map(product => <Item key={product.id} product={product} />)}
            </div>
        </div>
    )
}

export default Ecomm;
