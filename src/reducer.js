import initialState from './store';
import { Constants } from "./constants";
import { Actions } from "./actions/actionConstants";

function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case Actions.ADD_ITEM: {
      const { user, product, quantity } = action.payload;
      //const userBag = state.userBag.find(bag => bag.user === user);

      return {
        ...state,
        userBag: state.userBag.map(bag =>
          bag.user === user ? { ...bag, items: [...bag.items, { product: product, quantity: quantity }] } : bag
        )
      };
    };

    case Actions.DELETE_ITEM:
      return {
        ...state,
        userBag: state.userBag.filter((item) => item.id !== action.payload.id),
      };

    case Actions.SET_PROD:
      return {
        ...state,
        initData: [...action.payload],
      };

    case Actions.SET_USER:
      return {
        ...state,
        curUser: action.payload,
      };

    case Actions.MERGE_BAGS:
      return { ...state };

    case Actions.CREATE_BAGS: {
      const user = action.payload;
      const userBag = state.userBag.find(bag => bag.user === user);

      if (!userBag) {
        //first time login, create user bag
        return {
          ...state,
          userBag: [...state.userBag, { user: user, items: [] }],
        };
      } else {
        //user login again, just do nothing with bags 
        return { ...state };
      }
    };

    default:
      return { ...state };
  }
}

export default reducer;
