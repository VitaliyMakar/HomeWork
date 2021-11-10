import React, {useContext} from "react";
import {GlobalContext} from "./GlobalContextComponent";
import Users from "./Users";

const Albums = () => {

    const {albums} = useContext(GlobalContext)
    const {activeUser} = useContext(GlobalContext)
    return (
        <div className="work-container">
            <Users/>
            <div>
                {
                    albums.map((album) => (
                            <div
                                key={album.id}
                            >
                                {album.title}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Albums;