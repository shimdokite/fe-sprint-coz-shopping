import { CHANGE_BOOKMARK, GET_PRODUCTS_DATA } from "../actions";
import { initialState } from "./initialState";

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_DATA:
      if (!state.products) {
        return {
          ...state,
          products: action.payload?.map((cur) => {
            return {
              ...cur,
              isBookmark: false,
            };
          }),
        };
      }

    case CHANGE_BOOKMARK: {
      return {
        ...state,
        products: state.products.map((cur) => {
          return {
            ...cur,
            isBookmark:
              cur.id === action.payload ? !cur.isBookmark : cur.isBookmark,
          };
        }),
      };
    }

    default:
      return state;
  }
};
