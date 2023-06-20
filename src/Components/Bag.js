import { useState, useEffect } from "react";
import ItemInBag from "./ItemInBag";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { actions } from "../actions/actionCreator";

function Bag(props) {
    const [prods, setProds] = useState([]);

    return (
        <div>
            <div className="item-container">
                {prods.slice(0, 6).map(product => <ItemInBag key={product.id} product={product} />)}
            </div>
            <Link className="back-link" to="/">Back</Link>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        userInfo: state.userInfo,
        curUser: state.curUser,
        userBag: state.userBag,
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        setCurUser: () => dispatch(actions.addItem()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bag);