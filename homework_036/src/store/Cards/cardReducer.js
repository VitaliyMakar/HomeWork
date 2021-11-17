import {ADD_CARD, REMOVE_CARD} from "./actions";

const initialState = {
    list: []
}

export const CardReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case ADD_CARD:
            return {...state, list: [...state.list, payload]}

        case REMOVE_CARD:
            return {...state, list: state.list.filter(item => item.id !== payload)}

        default:
            return state
    }
}