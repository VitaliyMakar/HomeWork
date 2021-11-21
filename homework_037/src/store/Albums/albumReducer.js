import {
    CHANGE_ACTIVE_ALBUM,
    FETCH_ALBUMS
} from "./actions";

const initialState = {
    albums: [],
    activeAlbum: null,
}

export const AlbumReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case FETCH_ALBUMS:
            return {...state, albums: payload}

        case CHANGE_ACTIVE_ALBUM:
            return {...state, activeAlbum: payload}


        default:
            return state
    }
}