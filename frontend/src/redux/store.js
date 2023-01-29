import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as loginAuth} from "./Authlogin/reducer"
 
const rootReducer = combineReducers({
   loginAuth
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk)); 
 