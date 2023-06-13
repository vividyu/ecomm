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

        //   case DELETE_LIKED_MOVIE:
        //     return {
        //       ...state,
        //       likedMovies: state.likedMovies.filter(
        //         (movie) => movie.id !== action.payload.id
        //       ),
        //     };

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

        //   case STORE_MOVIE_DETAILS:
        //     return { ...state, movieDetails: action.payload };
        default:
            return state;
    }
}

export default reducer;
