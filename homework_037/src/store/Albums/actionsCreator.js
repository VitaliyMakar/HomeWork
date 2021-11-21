import {
    CHANGE_ACTIVE_ALBUM,
    FETCH_ALBUMS
} from "./actions";

export const getAlbumsById = (userId) => {
    return async (dispatch) => {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums?userId=' + userId)
            const data = await response.json()
            dispatch( addAlbums(data) )

        } catch (e) {
            console.log( e.message )
        }
    }
}

export const changeActiveAlbum = (album) => {
    return {
        type: CHANGE_ACTIVE_ALBUM,
        payload: album
    }
}

const addAlbums = data => {
    return {
        type: FETCH_ALBUMS,
        payload: data
    }
}

