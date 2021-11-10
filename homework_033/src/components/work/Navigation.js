import React, {useState} from "react"
import {NavLink} from "react-router-dom";

const Navigation = () => {

    return (

        <nav className="nav-list">
            <NavLink className="nav-list__item" to="/">ToDo</NavLink>
            <NavLink className="nav-list__item" to="/Posts">Posts</NavLink>
            <NavLink className="nav-list__item" to="/Albums">Albums</NavLink>
        </nav>

    )
}

export default Navigation;