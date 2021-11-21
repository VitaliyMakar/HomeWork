import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeActiveAlbum} from "../../store/Albums/actionsCreator";


export default ({album})=> {

    const dispatch = useDispatch()
    const activeAlbum = useSelector(state => state.albums.activeAlbum)

    const changeAlbum = () => {
        dispatch(changeActiveAlbum( album ))
    }

    return (
        <div
            className={
            (!activeAlbum || (album.id !== activeAlbum.id)) ? "items-list__item" : "items-list__item--active"}
            onClick={changeAlbum}
        >
            {album.title}
        </div>
    )
}