import initialState from './store';
import { Constants } from "./constants";
import { Actions } from "./actions/actionConstants";

function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case Actions.ADD_ITEM: {
      const { user, product, quantity } = action.payload;

      return {
        ...state,
        userBag: state.userBag.map((bag) => {
          if (bag.user !== user) {
            return bag; // Not the current user, return the bag as is
          }

          const existingItemIndex = bag.items.findIndex((item) => item.product.id === product.id);

          if (existingItemIndex === -1) {
            // If item is not already in the bag, add it
            return {
              ...bag,
              items: [...bag.items, { product, quantity }]
            };
          } else {
            // If item is already in the bag, update the quantity
            const updatedItems = [...bag.items];
            updatedItems[existingItemIndex].quantity += quantity;

            return {
              ...bag,
              items: updatedItems
            };
          }
        }),
      };
    }

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
