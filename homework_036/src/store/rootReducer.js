import {combineReducers} from "redux";
import {reducer as DealReducer} from "./Deals/reducer";
import {PostReducer} from "./Posts/postReducer";
import {CardReducer} from "./Cards/cardReducer";


export const RootReducer = combineReducers({
    deals: DealReducer,
    posts: PostReducer,
    cards: CardReducer
})