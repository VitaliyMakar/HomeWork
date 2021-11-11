import React, {useContext} from "react";
import {GlobalContext} from "./GlobalContextComponent";
import Users from "./Users";

const Albums = () => {

    const {albums, activeUser, activeAlbum, setActiveAlbum, photos} = useContext(GlobalContext)

    return (
        <div className="work-container">
            <Users/>
            <div className="work-container__list">
                <div className="work-container__list--active-user">Albums
                    from {!activeUser ? "...Click on User" : activeUser.name}</div>
                {
                    albums.map((album) => (
                            <div
                                key={album.id}
                                className={
                                    (!activeAlbum || (activeAlbum.id !== album.id)) ? "work-container__list-item" : "work-container__list-item--active"}
                                onClick={() => {
                                    setActiveAlbum(album);
                                }}
                            >
                                {album.title}
                            </div>
                        )
                    )
                }
            </div>
            <div className="work-container__head">
                <div className="work-container__photos--active-album">Photos
                    from Album {!activeAlbum ? "...Click on Album" : activeAlbum.title}</div>
                <div className="work-container__photos" id="containerPhotos">
                    {
                        photos.map((photo) => (
                                <div
                                    key={photo.id}
                                    className="work-container__photos-box"
                                >
                                    <img src={photo.thumbnailUrl} alt="" className="work-container__photos-img"/>
                                    {photo.title}
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Albums;