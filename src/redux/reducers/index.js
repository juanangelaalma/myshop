import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import navbarReducer from "./navbarReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({ products: productsReducer, menu: navbarReducer, auth: authReducer })

export default rootReducer