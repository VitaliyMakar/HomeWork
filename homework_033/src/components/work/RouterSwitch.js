import React from "react";
import {Route, Routes} from "react-router-dom"
import ToDo from "./ToDo";
import Posts from "./Posts";
import Albums from "./Albums";

const RouterSwitch = () => {
    return (
        <div>
            <Routes className="work-container">
                <Route className="" path="/" index element={<ToDo/>} />
                <Route path="/Posts" element={<Posts/>} />
                <Route path="/Albums" element={<Albums/>} />
            </Routes>
        </div>
    )
}

export default RouterSwitch;