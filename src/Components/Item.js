import './Item.css';
import { connect } from 'react-redux';
import { actions } from "../actions/actionCreator";
import { useState } from 'react';

function Item(props) {
    const [count, setCount] = useState(0);
    const product = props.product;
    const curUser = props.curUser;
    const curItems = props.userBag.filter(obj => obj.user === curUser)[0].items;


    function handleAdd() {  
        props.addItem(curUser, product);
        setCount(prev => prev + 1);
    }

    return (
        <div>
            <img className="prod-image" src={product.image} alt={product.title}></img>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <button onClick={handleAdd}>Add to Bag</button>
        </div>
    );
}

const mapStateToProps = (state) => (
    {
        curUser: state.curUser,
        userBag: state.userBag,
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (user, item) => dispatch(actions.addItem(user, item)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);