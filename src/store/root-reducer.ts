import charactersReducer from "@/redux/characters/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ charactersReducer });

export default rootReducer;
