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

export const getProducts = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products`
    );
    dispatch(storeProdDetails(response.data));
  };
};
