import {
  ADD_TO_BOOKMARK,
  DELETE_BOOKMARK,
  GET_PRODUCTS_DATA,
} from "../actions";
import { initialState } from "./initialState";

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_DATA:
      // console.log(action.payload)
      return {
        ...state,
        products: action.payload,
      };

    case ADD_TO_BOOKMARK:
      const updatedProducts = state.products.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            isBookmark: !product.isBookmark,
          };
        }
        return product;
      });

      const bookmarkItem = updatedProducts.filter(
        (cur) => cur.isBookmark === true
      );

      let bookmarkedProducts = [];

      if (state.bookmark && state.bookmark.length) {
        bookmarkedProducts = [...state.bookmark, ...bookmarkItem];
      } else {
        bookmarkedProducts = [...bookmarkItem];
      }

      return {
        ...state,
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
