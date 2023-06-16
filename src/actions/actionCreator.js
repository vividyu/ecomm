import Actions from "./actionConstants";
import axios from "axios";

const addItem = (item) => ({
  type: Actions.ADD_ITEM,
  payload: item,
});

const deleteItem = (item) => ({
  type: Actions.DELETE_ITEM,
  payload: item,
});

const setProducts = (item) => ({
  type: Actions.SET_PROD,
  payload: item,
});

const getProducts = () => {
  return async dispatch => {
    const response = await axios.get(
      `https://fakestoreapi.com/products`
    );
    dispatch(setProducts(response.data));
  };
};

export const actions = {
  addItem,
  deleteItem,
  getProducts,
  setProducts
}