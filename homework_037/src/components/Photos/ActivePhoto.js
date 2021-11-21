import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {changeActivePhoto} from "../../store/Photos/actionsCreator";

const ActivePhoto = () => {

    const activePhoto = useSelector(state => state.photos.activePhoto)
    const dispatch = useDispatch()

    const removePhoto = () => {
        dispatch(changeActivePhoto( null ))
    }

    window.scrollTo({top: 0, behavior: 'smooth'})


    return !activePhoto ? ('') : (
        <div className="modal-window">
            <div className="modal-wrapper">
                <div className="modal-wrapper--img">
                    <img src={activePhoto.url} alt=""/>
                </div>
                <p>{activePhoto.title}</p>
                <button
                    className="modal-button"
                    onClick={removePhoto}>Close</button>
            </div>


        </div>
    )
}

export default ActivePhoto;