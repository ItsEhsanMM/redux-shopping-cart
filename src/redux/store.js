import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import root from "./rootReducer";

const store = createStore(root, applyMiddleware(thunk));

export default store;
