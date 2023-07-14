export const GET_PRODUCTS_DATA = "GET_PRODUCTS_DATA";
export const ADD_TO_BOOKMARK = "ADD_TO_BOOKMARK";
export const DELETE_BOOKMARK = "DELETE_BOOKMARK";

export const getProductsData = (products) => {
  return {
    type: GET_PRODUCTS_DATA,
    payload: products,
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
