import {
    CHANGE_ACTIVE_COMMENT,
    FETCH_COMMENTS
} from "./actions";

const initialState = {
    comments: [],
    activeComment: null,
}

export const CommentReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case FETCH_COMMENTS:
            return {...state, comments: payload}

        case CHANGE_ACTIVE_COMMENT:
            return {...state, activeComment: payload}


        default:
            return state
    }
}