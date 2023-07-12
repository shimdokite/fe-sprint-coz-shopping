import axios from "axios";

export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";
export const ADD_TO_BOOKMARK = "ADD_TO_BOOKMARK";
export const DELETE_BOOKMARK = "DELETE_BOOKMARK";

export const getProductsSuccess = async (products) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const getProductsFailure = async (error) => {
  return {
    type: GET_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const addToBookmark = (id) => {
  return {
    type: ADD_TO_BOOKMARK,
    payload: id,
  };
};

export const deleteBookmark = (id) => {
  return {
    type: DELETE_BOOKMARK,
    payload: id,
  };
};
