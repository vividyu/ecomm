import React, { useState, useEffect } from 'react';
import './Ecomm.css';
import { Link } from 'react-router-dom';
import Item from './Item';
import { connect } from 'react-redux';
import { actions } from "../actions/actionCreator";

function Ecomm(props) {
    const [keyword, setKeyword] = useState("");
    const [itemTotal, setItemTotal] = useState(0);
    const curUser = props.curUser;
    const curItems = props.userBag.filter(obj => obj.user === curUser)[0].items;

    useEffect(() => {
        //props.getProducts();
    }, []);

    useEffect(() => {
        const itemCount = curItems.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0);

        setItemTotal(itemCount);
    }, [curItems]);

    const filteredProducts = (props.initData || []).filter(prod => prod.title.includes(keyword));

    return (
        <div className="main-container">
            <nav className='nav-container'>
                <input className="search-bar" placeholder="Search... " value={keyword} onChange={e => setKeyword(e.target.value)} />
                <Link className="login-link" to="/login">Login</Link>
                <Link className="bag-link" to="/bag">Bag(<span id='bag-item-count'>{itemTotal}</span>)</Link>
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
        curUser: state.curUser,
        userBag: state.userBag,
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(actions.getProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ecomm);
