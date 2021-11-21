import React from "react";
import UsersList from "../Users/UsersList";
import AlbumsList from "./AlbumsList";
import ActivePhoto from "../Photos/ActivePhoto";
import PhotosList from "../Photos/PhotosList";

function AlbumsMain() {
    return (
        <div className="main-container">
            <div className="user-list">
                <UsersList/>
            </div>
            <div className="items-list">
                <AlbumsList/>
            </div>
            <div className="items-list">
                <PhotosList/>
            </div>
            <>
                <ActivePhoto/>
            </>

        </div>
    )
        ;
}

export default AlbumsMain;