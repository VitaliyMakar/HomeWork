import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTodosById} from "../../store/ToDo/actionsCreator";
import TodoItem from "./TodoItem";

const TodosList = () => {

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)
    const activeUser = useSelector(state => state.users.activeUser)

    useEffect(() => {
        if (activeUser) dispatch(getTodosById(activeUser.id))
    }, [activeUser])

    const renderTodos = () => {
        return todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)

        // !todos.length
        //     ? (<h2>No User selected</h2>)
        //     : todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)

    }

    return (


        <div>
            <h2 className="items-list__list-head">ToDos from: {!activeUser ? "...Click on User" : activeUser.name}</h2>
            <div className="">
                {renderTodos()}
            </div>
        </div>
    )
}

export default TodosList