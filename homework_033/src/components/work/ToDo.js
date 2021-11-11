import React, {useContext} from "react";
import {GlobalContext} from "./GlobalContextComponent";
import Users from "./Users";

const ToDo = () => {

    const {todos, activeUser} = useContext(GlobalContext)

    return (
        <div className="work-container">
            <Users/>
            <div className="work-container__list">
                <div className="work-container__list--active-user">Todos from {!activeUser ? "...Click on User" : activeUser.name}</div>
                {
                    todos.map((todo) => (
                            <div
                                key={todo.id}
                                className={todo.completed ? "work-container__list--completed" : "work-container__list-item"}
                            >
                                {todo.title}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default ToDo;