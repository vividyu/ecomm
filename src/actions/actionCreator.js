import { Actions } from "./actionConstants";
import axios from "axios";

const addItem = (user, product, quantity) => ({
  type: Actions.ADD_ITEM,
  payload: { user, product, quantity },
});

const subtractItem = (user, product, quantity) => ({
  type: Actions.SUBTRACT_ITEM,
  payload: { user, product, quantity },
});

const deleteItem = (user, product) => ({
  type: Actions.DELETE_ITEM,
  payload: { user, product },
});

const setProducts = (prods) => ({
  type: Actions.SET_PROD,
  payload: prods,
});

const getProducts = () => {
  return async (dispatch, getState) => {
    console.log("getProducts() has been called");
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

const mergeBags = (prevUser, curUser) => ({
  type: Actions.MERGE_BAGS,
  payload: {prevUser, curUser},
});

const createBags = (user) => ({
  type: Actions.CREATE_BAGS,
  payload: user,
});

export const actions = {
  addItem,
  subtractItem,
  deleteItem,
  getProducts,
  setProducts,
  setCurUser,
  mergeBags,
  createBags,
}