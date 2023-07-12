// store.js 파일
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: persistReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

export default { store };
