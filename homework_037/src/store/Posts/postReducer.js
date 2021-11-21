import {
    CHANGE_ACTIVE_POST,
    FETCH_POSTS
} from "./actions";

const initialState = {
    posts: [],
    activePost: null,
}

export const PostReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case FETCH_POSTS:
            return {...state, posts: payload}

        case CHANGE_ACTIVE_POST:
            return {...state, activePost: payload}


        default:
            return state
    }
}