export const GET_PRODUCTS_DATA = "GET_PRODUCTS_DATA";
export const CHANGE_BOOKMARK = "CHANGE_BOOKMARK";

export const getProductsData = (products) => {
  return {
    type: GET_PRODUCTS_DATA,
    payload: products,
  };
};

export const changeBookmark = (product) => {
  return {
    type: CHANGE_BOOKMARK,
    payload: product,
  };
};
