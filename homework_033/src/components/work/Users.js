import React, {useContext, useState} from "react";
import {GlobalContext} from "./GlobalContextComponent";

const Users = () => {
    const {users, activeUser, setActiveUser, setPhotos, setActiveAlbum} = useContext(GlobalContext)

    return (
        <div className="work-container__userList">
            {

                users.map((user) => {
                    return (
                        <div
                            key={user.id}
                            onClick={() => {
                                setActiveUser(user);
                                setActiveAlbum(null)
                                setPhotos([])
                            }}
                            className={
                                (!activeUser || (activeUser.id !== user.id)) ? "work-container__user" : "work-container__user--active"}
                        >
                            {user.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;