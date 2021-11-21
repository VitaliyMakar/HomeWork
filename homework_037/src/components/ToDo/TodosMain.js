import React from "react";
import UsersList from "../Users/UsersList";
import TodosList from "./TodosList";
import {useDispatch, useSelector} from "react-redux";
import {changeActiveUser} from "../../store/Users/actionsCreator";
import {clearTodos} from "../../store/ToDo/actionsCreator";


function TodosMain() {

    // const todos = useSelector(state => state.todos.todos)
    // const dispatch = useDispatch()
    // dispatch(changeActiveUser(null))
    // dispatch(clearTodos(todos))

    return (
        <div className="main-container">
            <div className="user-list">
                <UsersList/>
            </div>
            <div className="items-list">
                <TodosList/>
            </div>
        </div>
    )
        ;
}

export default TodosMain;