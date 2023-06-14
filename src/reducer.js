import {
    ADD_ITEM,
    DELETE_ITEM,
} from "./actions/actionConstants";

import initialState from "./store";

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state };

        case DELETE_ITEM:
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
