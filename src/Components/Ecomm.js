import React, { useState, useEffect } from 'react';
import './Ecomm.css';
import { Link } from 'react-router-dom';
import Item from './Item';
import { connect } from 'react-redux';
import { actions } from "../actions/actionCreator";

function Ecomm(props) {
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        props.getProducts();
    }, []);

    const filteredProducts = (props.initData || []).filter(prod => prod.title.toLowerCase().includes(keyword.toLowerCase()));

    return (
        <div className="main-container">
            <nav className='nav-container'>
                <input className="search-bar" placeholder="Search... " value={keyword} onChange={e => setKeyword(e.target.value)} />
                <Link className="login-link" to="/login">Login</Link>
                <Link className="bag-link" to="/bag">Bag</Link>
            </nav>
            <div className="item-container">
                {filteredProducts.map(product => <Item key={product.id} product={product} />)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        initData: state.initData,
        userBag: state.userBag,
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: () => dispatch(actions.addItem()),
        getProducts: () => dispatch(actions.getProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ecomm);
