import {
    CHANGE_ACTIVE_PHOTO,
    FETCH_PHOTOS
} from "./actions";

export const getPhotosById = (albumId) => {
    return async (dispatch) => {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId)
            const data = await response.json()
            dispatch( addPhotos(data) )

        } catch (e) {
            console.log( e.message )
        }
    }
}

export const changeActivePhoto = (photo) => {
    return {
        type: CHANGE_ACTIVE_PHOTO,
        payload: photo
    }
}

const addPhotos = data => {
    return {
        type: FETCH_PHOTOS,
        payload: data
    }
}

