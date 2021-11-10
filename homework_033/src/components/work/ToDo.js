import React, {useContext} from "react";
import {GlobalContext} from "./GlobalContextComponent";
import Users from "./Users";

const ToDo = () => {

    const {todos} = useContext(GlobalContext)
    const {activeUser} = useContext(GlobalContext)
    return (
        <div className="work-container">
            <Users/>
            <div>
                {
                    todos.map((todo) => (
                            <div
                                key={todo.id}
                                className={todo.completed ? "completed" : ""}
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