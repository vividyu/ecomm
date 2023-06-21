import initialState from './store';
//import { Constants } from "./constants";
import { Actions } from "./actions/actionConstants";

function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case Actions.ADD_ITEM: {
      const { user, product, quantity } = action.payload;

      return {
        ...state,
        userBag: state.userBag.map((bag) => {
          // do not change other users' bags
          if (bag.user !== user) {
            return bag;
          }

          const existingItemIndex = bag.items.findIndex((item) => item.product.id === product.id);

          if (existingItemIndex === -1) {
            // first time to add
            return {
              ...bag,
              items: [...bag.items, { product, quantity }]
            };
          } else {
            // already exists, add quantity
            const updatedItems = [...bag.items];
            updatedItems[existingItemIndex].quantity += quantity;

            return {
              ...bag,
              items: updatedItems
            };
          }
        }),
      };
    };

    case Actions.SUBTRACT_ITEM: {
      const { user, product, quantity } = action.payload;
      return {
        ...state,
        userBag: state.userBag.map((bag) => {
          // do not change other users' bags
          if (bag.user !== user) {
            return bag;
          }

          const existingItemIndex = bag.items.findIndex((item) => item.product.id === product.id);

          if (existingItemIndex === -1) {
            //should return error if item does not exist
          }

          // item is already in the bag, update the quantity
          const updatedItems = [...bag.items];
          updatedItems[existingItemIndex].quantity -= quantity;

          return {
            ...bag,
            items: updatedItems
          };
        }),
      };
    };

    case Actions.DELETE_ITEM: {
      const { user, product } = action.payload;
      return {
        ...state,
        userBag: state.userBag.map((bag) => {
          // do not change other users' bags
          if (bag.user !== user) {
            return bag;
          }

          const updatedItems = bag.items.filter((item) => item.product.id !== product.id);
          return {
            ...bag,
            items: updatedItems
          };
        }),
      };
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

    case Actions.MERGE_BAGS: {
      const { prevUser, curUser } = action.payload;
      const prevBag = state.userBag.find(bag => bag.user === prevUser);
      //console.log(prevBag.items);

      return {
        ...state,
        userBag: state.userBag.map((bag) => {
          // delete the prevUser's bag
          if (bag.user === prevUser) {
            return {
              ...bag,
              items: []
            };
          } else if (bag.user === curUser) {
            return {
              ...bag,
              items: [...bag.items, ...prevBag.items],
            };
          } else {
            return bag;
          }
        }),
      };
    }

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
