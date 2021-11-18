import {
    CHANGE_ACTIVE_USER,
    FETCH_USERS
} from "./actions";

const initialState = {
    users: [],
    activeUser: null,
}

export const UserReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case FETCH_USERS:
            return {...state, users: payload}

        case CHANGE_ACTIVE_USER:
            return {...state, activeUser: payload}

        default:
            return state
    }
}