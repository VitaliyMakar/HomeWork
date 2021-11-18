import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
// import {RootReducer} from "./RootReducer";
import {UserReducer} from "./Users/userReducer"

export const store = createStore(UserReducer, applyMiddleware(thunk, logger))