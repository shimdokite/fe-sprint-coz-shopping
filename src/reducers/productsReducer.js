import {
  ADD_TO_BOOKMARK,
  DELETE_BOOKMARK,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from "../actions";
import { initialState } from "./initialState";

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        /* axios 요청으로 가져온 상품 보여주기*/
        ...state,
        products: action.payload,
        bookmark: [],
      };

    case GET_PRODUCTS_FAILURE:
      return { ...state, error: action.payload };

    case ADD_TO_BOOKMARK:
      const updatedProducts = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            isBookmarked: !product.isBookmarked,
          };
        }
        return product;
      });

      const bookmarkedProducts = [
        ...state.bookmarked,
        updatedProducts.find(({ id }) => id === action.payload.id),
      ];

      return {
        ...state,
        products: updatedProducts,
        bookmarked: bookmarkedProducts,
      };

    case DELETE_BOOKMARK: {
      const updatedBookmarked = state.bookmarked.filter(
        ({ id }) => id !== action.payload.id
      );

      return {
        ...state,
        bookmarked: updatedBookmarked,
      };
    }

    default:
      return state;
  }
};
