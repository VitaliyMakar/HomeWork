import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeStatusTodo} from "../../store/ToDo/actionsCreator";


export default ({todo})=> {

    const dispatch = useDispatch()

    const changeStatus = () => {
        dispatch(changeStatusTodo(todo.id))
    }



    return (
        <div
            className={todo.completed ? 'items-list__item' : 'items-list__item--completed'}
            onClick={changeStatus}
        >
            {todo.title}
        </div>
    )
}