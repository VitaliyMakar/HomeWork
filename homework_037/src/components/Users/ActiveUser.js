import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {changeActiveUser} from "../../store/Users/actionsCreator";

const ActiveUser = () => {

    const activeUser = useSelector(state => state.users.activeUser)
    const dispatch = useDispatch()

    const removeUser = () => {
        dispatch(changeActiveUser( null ))
    }

    return !activeUser ? (<div className="items-list__list-head">...Click on User</div>) : (
            <div className="modal-window">
                <div className="modal-wrapper">
                    <p>User Info</p>
                    <h2 className="user-list__user--active">{activeUser.name}</h2>
                    <p>UserName: {activeUser.username}</p>
                    <p>Address: <br/>
                        {activeUser.address.street}, {activeUser.address.suite} <br/>
                        {activeUser.address.zipcode}, {activeUser.address.city} <br/>
                        Mail: {activeUser.email} <br/>
                        Phone: {activeUser.phone}
                    </p>
                    <button
                        className="modal-button"
                        onClick={removeUser}>Close</button>
                </div>


            </div>
    )
}

export default ActiveUser;