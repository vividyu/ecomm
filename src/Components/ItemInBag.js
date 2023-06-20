import './ItemInBag.css';
import { connect } from 'react-redux';
import { actions } from "../actions/actionCreator";
import { useState, useEffect } from 'react';

function ItemInBag(props) {
    const [count, setCount] = useState(0);
    const product = props.product.item;
    const pCount = props.product.count;

    useEffect(()=>{
        setCount(pCount);
    },[props.product])
    
    return (
        <div>
            <img className="prod-image" src={product.image} alt={product.title}></img>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <span>
                <button>-</button>
                <input className='item-count' type='number' value={count} readOnly></input>
                <button>+</button>
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
        addItem: () => dispatch(actions.addItem()),
        getProducts: () => dispatch(actions.getProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemInBag);