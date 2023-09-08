import { combineReducers, compose, legacy_createStore as createStore } from "redux";
import goodsReducer from "./goodsReducer.ts";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let reducers = combineReducers({
    goods: goodsReducer,
})

let store = createStore(reducers, composeEnhancers());

export default store;