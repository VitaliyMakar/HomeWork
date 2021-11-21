import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAlbumsById} from "../../store/Albums/actionsCreator";
import AlbumItem from "./AlbumItem";

const AlbumsList = () => {

    const dispatch = useDispatch()
    const albums = useSelector(state => state.albums.albums)
    const activeUser = useSelector(state => state.users.activeUser)

    useEffect(() => {
        if (activeUser) dispatch(getAlbumsById(activeUser.id))
    }, [activeUser])

    const renderAlbums = () => {
        return albums.map(album => <AlbumItem key={album.id} album={album}/>)
}

    return (


        <div>
            <h2 className="items-list__list-head">Albums from: {!activeUser ? "...Click on User" : activeUser.name}</h2>

            <div className="">
                {renderAlbums()}
            </div>
        </div>
    )
}

export default AlbumsList