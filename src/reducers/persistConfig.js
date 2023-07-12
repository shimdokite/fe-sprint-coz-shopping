import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productsReducer } from "./productsReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["productsReducer"],
};

const rootReducer = combineReducers({ products: productsReducer });

export default persistReducer(persistConfig, rootReducer);
