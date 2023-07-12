import axios from "axios";
import { getProductsFailure, getProductsSuccess } from ".";

export const productsRequest = () => async (dispatch) => {
  try {
    const storage_data = localStorage.getItem("persist:root");

    // storage 에 저장된 데이터가 있다면 리듀서로 넘겨주기
    if (storage_data) {
      dispatch(getProductsSuccess(storage_data));
      return;
    }

    const res = await axios.get(
      "http://cozshopping.codestates-seb.link/api/v1/products"
    );

    // 북마크 여부를 추가한 데이터
    const bookmark = res.data.map((cur) => ({
      ...cur,
      isBookmark: false,
    }));

    dispatch(getProductsSuccess(bookmark));
  } catch (error) {
    dispatch(getProductsFailure(error.message));
  }
};
