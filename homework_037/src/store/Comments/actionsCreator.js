import {
    CHANGE_ACTIVE_COMMENT,
    FETCH_COMMENTS
} from "./actions";

export const getCommentsById = (postId) => {
    return async (dispatch) => {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
            const data = await response.json()
            dispatch( addComments(data) )

        } catch (e) {
            console.log( e.message )
        }
    }
}

export const changeActiveComment = (comment) => {
    return {
        type: CHANGE_ACTIVE_COMMENT,
        payload: comment
    }
}

const addComments = data => {
    return {
        type: FETCH_COMMENTS,
        payload: data
    }
}

