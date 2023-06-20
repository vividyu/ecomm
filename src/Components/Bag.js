import ItemInBag from "./ItemInBag";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from "../actions/actionCreator";

function Bag(props) {
    const curUser = props.curUser;
    const curItems = props.userBag.filter(obj => obj.user === curUser)[0].items;
    console.log(curItems);

    //map curItems to product:..., count:...

    return (
        <div>
            <div className="item-container">
                {curItems.map(product => <ItemInBag key={product.id} product={product} />)}
            </div>
            <Link className="back-link" to="/">Back</Link>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
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