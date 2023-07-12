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
      return {
        /* id가 같은 상품은 북마크하기 */
      };

    case DELETE_BOOKMARK:
      return {
        /* id가 같은 상품은 북마크 해제하기 */
      };

    default:
      return state;
  }
};
