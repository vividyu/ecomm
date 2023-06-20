import ItemInBag from "./ItemInBag";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from "../actions/actionCreator";
import {v4} from 'uuid';

function Bag(props) {
    const curUser = props.curUser;
    const curItems = props.userBag.filter(obj => obj.user === curUser)[0].items;
    //console.log(curItems);

    //map curItems to {product:..., count:...}
    const groupedItems = curItems.reduce((result, item) => {
        const key = item.id;
        const existingItem = result.find(a => a.item.id === key);
    
        if (existingItem) {
          existingItem.count++;
        } else {
          result.push({ item: item, count: 1 });
        }
        return result;
      }, []);

      console.log(groupedItems);

    return (
        <div>
            <div className="item-container">
                {groupedItems.map(gItem => <ItemInBag key={v4()} product={gItem} />)}
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