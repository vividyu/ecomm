import initialState from './store';

import { Actions } from "./actions/actionConstants";

function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case Actions.ADD_ITEM:
            return {
                ...state,
                userBag: [...state.userBag, ...action.payload]
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
        default:
            return { ...state };
    }
}

export default reducer;
