import { useState } from "react";
import './ItemInBag.css';
import { connect } from 'react-redux';
import { actions } from "../actions/actionCreator";

function ItemInBag({product}) {
    return (
        <div>
            <img className="prod-image" src={product.image} alt={product.title}></img>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <button>Delete from Bag</button>
        </div>
    );
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
        addItem: () => dispatch(actions.addItem()),
        getProducts: () => dispatch(actions.getProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemInBag);