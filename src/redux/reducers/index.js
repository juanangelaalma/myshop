import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import navbarReducer from "./navbarReducer";

const rootReducer = combineReducers({ products: productsReducer, menu: navbarReducer })

export default rootReducer