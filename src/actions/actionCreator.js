import {Actions} from "./actionConstants";
import axios from "axios";

const addItem = (item) => ({
  type: Actions.ADD_ITEM,
  payload: item,
});

const deleteItem = (item) => ({
  type: Actions.DELETE_ITEM,
  payload: item,
});

const setProducts = (prods) => ({
  type: Actions.SET_PROD,
  payload: prods,
});

const getProducts = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products`
    );
    dispatch(setProducts(response.data));
  };
};

const setCurUser = (user) => ({
  type: Actions.SET_USER,
  payload: user,
});

export const actions = {
  addItem,
  deleteItem,
  getProducts,
  setProducts,
  setCurUser,
}