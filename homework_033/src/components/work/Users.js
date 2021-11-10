import React, {useContext} from "react";
import {GlobalContext} from "./GlobalContextComponent";

const Users = () => {
    const {users, setActiveUser} = useContext(GlobalContext)
    const {activeUser} = useContext(GlobalContext)

    return (
        <div className="work-container__userList">
            {
                users.map((user) => {
                    return (
                        <div
                            key={user.id}
                            onClick={() =>{setActiveUser(user)}}
                            className="work-container__user"
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