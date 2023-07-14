import {
  ADD_TO_BOOKMARK,
  DELETE_BOOKMARK,
  GET_PRODUCTS_DATA,
  FILTER_TYPE,
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
        (cur) => cur.id === action.payload
      );

      let bookmarkedProducts = [];

      if (state.bookmark && state.bookmark.length) {
        bookmarkedProducts = [...state.bookmark];
        bookmarkItem.forEach((item) => {
          if (!bookmarkedProducts.some((product) => product.id === item.id)) {
            bookmarkedProducts.push(item);
          }
        });
      } else {
        bookmarkedProducts = [...bookmarkItem];
      }

      return {
        ...state,
        bookmark: bookmarkedProducts,
      };

    case DELETE_BOOKMARK: {
      const updatedBookmarked = state.bookmark.filter(
        (cur) => cur.id !== action.payload
      );

      console.log(updatedBookmarked);

      return {
        ...state,
        bookmark: updatedBookmarked,
      };
    }

    case FILTER_TYPE:
      const filteredProducts = state.products.filter(
        (product) => product.type === action.payload
      );

      if (action.payload === "Product") {
        return {
          ...state,
          products: filteredProducts,
        };
      } else if (action.payload === "Category") {
        return {
          ...state,
          products: filteredProducts,
        };
      } else if (action.payload === "Exhibition") {
        return {
          ...state,
          products: filteredProducts,
        };
      } else if (action.payload === "Brand") {
        return {
          ...state,
          products: filteredProducts,
        };
      } else {
        return {
          ...state,
        };
      }

    default:
      return state;
  }
};
