import { createStore, applyMiddleware, compose } from "redux";
import persistReducer from "../reducers";
import thunk from "redux-thunk"; // 비동기...

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

const store = createStore(
  persistReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
