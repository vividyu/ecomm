import initialState from './store';

import { Actions } from "./actions/actionConstants";

function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case Actions.ADD_ITEM: {
            const { user, item } = action.payload;
          
            const userBag = state.userBag.find(bag => bag.user === user);
          
            if (!userBag) {
              return {
                ...state,
                userBag: [...state.userBag, { user, items: [item] }],
              };
            } else {
              return {
                ...state,
                userBag: state.userBag.map(bag =>
                  bag.user === user ? { ...bag, items: [...bag.items, item] } : bag
                )
              };
            }
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
        default:
            return { ...state };
    }
}

export default reducer;
