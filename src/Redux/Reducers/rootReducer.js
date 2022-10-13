import { combineReducers } from "redux";
import saveReducer from "./reducer";

const rootReducer = combineReducers({ saveReducer });

export default rootReducer;
