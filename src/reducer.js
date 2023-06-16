import initialState from './store';

import { Actions } from "./actions/actionConstants";

function reducer(state = initialState, action) {
    switch (action.type) {
        case Actions.ADD_ITEM:
            return { ...state };

        case Actions.DELETE_ITEM:
            return { ...state };

        //   case STROE_MOVIE_DATA:
        //     return {
        //       ...state,
        //       movieData: {
        //         ...state.movieData,
        //         [action.payload.page]: {
        //           movies: action.payload.movies,
        //           totalPages: action.payload.totalPages,
        //         },
        //       },
        //     };

        default:
            return state;
    }
}

export default reducer;
