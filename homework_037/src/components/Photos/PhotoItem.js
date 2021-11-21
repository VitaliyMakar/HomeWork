import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeActivePhoto} from "../../store/Photos/actionsCreator";


export default ({photo})=> {

    const dispatch = useDispatch()
    const activePhoto = useSelector(state => state.photos.activePhoto)


    const changePhoto = () => {
        dispatch(changeActivePhoto( photo ))
    }

    return (
        <div
            className={
            (!activePhoto || (photo.id !== activePhoto.id)) ? "photos-list__photo" : "photos-list__photo--active"}
            onClick={changePhoto}
        >
            <div className="photos-list__photo--img">
                <img src={photo.thumbnailUrl} alt=""/>
            </div>
            <p className="photos-list__photo--text">{photo.title}</p>

        </div>
    )
}