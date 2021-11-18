import {
    CHANGE_ACTIVE_USER,
    FETCH_USERS
} from "./actions";

export const getAllUsers = () => {
    return async (dispatch) => {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            dispatch( addAllUsers(data) )
        } catch (e) {
            console.log( e.message )
        }
    }
}

export const changeActiveUser = (user) => {
    return {
        type: CHANGE_ACTIVE_USER,
        payload: user
    }
}

const addAllUsers = data => {
    return {
        type: FETCH_USERS,
        payload: data
    }
}

