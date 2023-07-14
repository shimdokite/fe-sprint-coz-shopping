import axios from "axios";
import { getProductsData, addToBookmark } from ".";

export const getProducts = () => {
  return async (dispatch) => {
    const res = await axios.get(
      "http://cozshopping.codestates-seb.link/api/v1/products"
    );

    dispatch(getProductsData(res.data));
  };
};
