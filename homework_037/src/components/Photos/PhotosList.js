import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPhotosById} from "../../store/Photos/actionsCreator";
import PhotoItem from "./PhotoItem";

const PhotosList = () => {

    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos.photos)
    const activePhoto = useSelector(state => state.photos.activePhoto)
    const activeAlbum = useSelector(state => state.albums.activeAlbum)


    useEffect(() => {
        if (activeAlbum) dispatch(getPhotosById(activeAlbum.id))
    }, [activeAlbum])

    const renderPhotos = () => {
        return photos.map(photo => <PhotoItem key={photo.id} photo={photo}/>)
    }

    return (

        <div>
            <div className="">
                <h2 className="items-list__list-head">Photos
                    from: {!activeAlbum ? "...Click on Post" : activeAlbum.title}</h2>
                <h2 className="items-list__list-head">...Click on Photo to see</h2>
            </div>

            <div className="photos-list">

                {renderPhotos()}
            </div>
        </div>
    )
}

export default PhotosList