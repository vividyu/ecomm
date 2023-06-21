import ItemInBag from "./ItemInBag";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import { actions } from "../actions/actionCreator";
import {v4} from 'uuid';

function Bag(props) {
    const curUser = props.curUser;
    const curItems = props.userBag.filter(obj => obj.user === curUser)[0].items;
    //console.log(curItems);

    return (
        <div>
            <div className="item-container">
                {curItems.map(gItem => <ItemInBag key={v4()} product={gItem} />)}
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

export default connect(mapStateToProps)(Bag);