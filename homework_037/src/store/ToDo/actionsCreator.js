import {
    CHANGE_STATUS_TODO,
    FETCH_TODOS,
    CLEAR_TODOS
} from "./actions";

export const getTodosById = (userId) => {
    return async (dispatch) => {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=' + userId)
            const data = await response.json()
            dispatch( addTodos(data) )

        } catch (e) {
            console.log( e.message )
        }
    }
}

export const clearTodos = (todos) => {
    return {
        type: CLEAR_TODOS,
        payload: todos
    }
}

export const changeStatusTodo = (id) => {
    return {
        type: CHANGE_STATUS_TODO,
        payload: id
    }
}

const addTodos = data => {
    return {
        type: FETCH_TODOS,
        payload: data
    }
}

