import { combineReducers } from "redux";
import productReducer from "./products/productReducer";
import cartReducer from "./cart/cartReducer";

const root = combineReducers({
   productState: productReducer,
   cartState: cartReducer,
});

export default root;
