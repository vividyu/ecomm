import './ItemInBag.css';
import { connect } from 'react-redux';
import { actions } from "../actions/actionCreator";
import { useState, useEffect } from 'react';

function ItemInBag(props) {
    const [count, setCount] = useState(0);
    const product = props.product.product;
    const pCount = props.product.quantity;

    useEffect(() => {
        setCount(pCount);
    }, [props.product]);


    function handleAdd(product) {
        props.addItem(props.curUser, product, 1);
    }

    function handleSub(product) {
        //console.log(count);
        if (count < 0) {
            console.error("product id:" + product.id + " -> quantity error");
            return;
        } else if (count === 0) {
            props.deleteItem(props.curUser, product);
            return;
        } else {
            props.subtractItem(props.curUser, product, 1);
        }
    }

    return (
        <div>
            <img className="prod-image" src={product.image} alt={product.title}></img>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <span>
                <button onClick={() => handleSub(product)}>-</button>
                <input className='item-count' type='number' value={count} readOnly></input>
                <button onClick={() => handleAdd(product)}>+</button>
            </span>

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
        addItem: (user, product, quantity) => dispatch(actions.addItem(user, product, quantity)),
        subtractItem: (user, product, quantity) => dispatch(actions.subtractItem(user, product, quantity)),
        deleteItem: (user, product) => dispatch(actions.deleteItem(user, product)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemInBag);