import {
  ADD_TO_BOOKMARK,
  DELETE_BOOKMARK,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_DATA,
} from "../actions";
import { initialState } from "./initialState";

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_DATA:
      // console.log(action.payload);
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
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
            isBookmark: !product.isBookmark,
          };
        }
        return product;
      });

      const bookmarkedProducts = [
        ...state.bookmark,
        updatedProducts.find(({ id }) => id === action.payload.id),
      ];

      return {
        ...state,
        products: updatedProducts,
        bookmark: bookmarkedProducts,
      };

    case DELETE_BOOKMARK: {
      const updatedBookmarked = state.bookmark.filter(
        ({ id }) => id !== action.payload.id
      );

      return {
        ...state,
        bookmark: updatedBookmarked,
      };
    }

    default:
      return state;
  }
};
