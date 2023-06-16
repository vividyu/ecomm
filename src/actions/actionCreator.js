import Actions from "./actionConstants";

import axios from "axios";

export const addItem = (item) => ({
  type: Actions.ADD_ITEM,
  payload: item,
});

export const deleteItem = (item) => ({
  type: Actions.DELETE_ITEM,
  payload: item,
});

export const getProducts = () => {
  return async dispatch => {
    const response = await axios.get(
      `https://fakestoreapi.com/products`
    );
    dispatch(storeProdDetails(response.data));
  };
};
