import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeActiveUser} from "../../store/Users/actionsCreator";

export default ({user})=> {

    const dispatch = useDispatch()
    const activeUser = useSelector(state => state.activeUser) ?? {}

    const changeUser = () => {
        dispatch(changeActiveUser( user ))
    }

    return (
        <div
            className={`list-group-item ${user.id===activeUser.id ? 'list-group-item-info': ''}`}
            onClick={changeUser}
        >
            {user.name}
        </div>
    )
}