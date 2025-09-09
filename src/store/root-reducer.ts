import { combineReducers } from "redux";
import charactersReducer from "@/redux/characters/reducer";

const rootReducer = combineReducers({ charactersReducer });

export default rootReducer;
