import characterdReducer from "@/redux/characters/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ characterdReducer });

export default rootReducer;
