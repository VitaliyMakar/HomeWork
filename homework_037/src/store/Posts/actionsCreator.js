import {
    CHANGE_ACTIVE_POST,
    FETCH_POSTS
} from "./actions";

export const getPostsById = (userId) => {
    return async (dispatch) => {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
            const data = await response.json()
            dispatch( addPosts(data) )

        } catch (e) {
            console.log( e.message )
        }
    }
}

export const changeActivePost = (post) => {
    return {
        type: CHANGE_ACTIVE_POST,
        payload: post
    }
}

const addPosts = data => {
    return {
        type: FETCH_POSTS,
        payload: data
    }
}

