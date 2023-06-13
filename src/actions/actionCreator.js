import {
  ADD_ITEM,
  DELETE_ITEM
} from "./actionConstants";

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const deleteItem = (item) => ({
  type: DELETE_ITEM,
  payload: item,
});

export const getMovies = (page, sortWord) => {
  return async (dispatch, getState) => {

    const movieData = getState().movieData;

    if (movieData[page]) {
      return;
    }

    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&` + `&page=${page}` + `&api_key=${API_KEY_V3}`
    );

    dispatch(
      storeMovieData(page, response.data.results, response.data.total_pages)
    );
  };
};

export const getMovieDetails = (movie_id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY_V3}&language=en-US`
    );
    dispatch(storeMovieDetails(response.data));
  };
};
