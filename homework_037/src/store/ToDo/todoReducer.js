import {
    CHANGE_STATUS_TODO,
    CLEAR_TODOS,
    FETCH_TODOS
} from "./actions";

const initialState = {
    todos: [],
    activeTodo: null,
}

export const TodoReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case FETCH_TODOS:
            return {...state, todos: payload}

        case CLEAR_TODOS:
            return {...state, todos: initialState}

        case CHANGE_STATUS_TODO:
            return {...state, todos: state.todos.map(todo => {
                if (todo.id === payload) return {...todo, completed: !todo.completed}
                return todo;
                })}

        default:
            return state
    }
}