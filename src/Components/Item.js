import './Item.css';
import { connect } from 'react-redux';
import { actions } from "../actions/actionCreator";

function Item(props) {

    const product = props.product;
    const curUser = props.curUser;

    function handleAdd() {
        //alert(curUser);
        props.addItem(curUser, product);
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