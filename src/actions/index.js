export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const ADD_TO_BOOKMARK = "ADD_TO_BOOKMARK";
export const DELETE_BOOKMARK = "DELETE_BOOKMARK";

export const getProductsSuccess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data,
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
