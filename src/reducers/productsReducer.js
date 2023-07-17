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
          toast: null,
        };
      } else {
        return {
          ...state,
          toast: null,
        };
      }

    case CHANGE_BOOKMARK:
      console.log(action.payload);
      return {
        ...state,
        products: state.products.map((cur) => {
          return {
            ...cur,
            isBookmark:
              cur.id === action.payload.id ? !cur.isBookmark : cur.isBookmark,
          };
        }),
        toast: {
          ...action.payload,
          isBookmark: !action.payload.isBookmark,
        },
      };

    default:
      return state;
  }
};
