import { combineReducers } from "redux";
import {UserReducer} from "./Users/userReducer";

export const RootReducer = combineReducers({
    users: UserReducer
})