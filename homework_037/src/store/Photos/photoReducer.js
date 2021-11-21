import {
    CHANGE_ACTIVE_PHOTO,
    FETCH_PHOTOS
} from "./actions";

const initialState = {
    photos: [],
    activePhoto: null,
}

export const PhotoReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case FETCH_PHOTOS:
            return {...state, photos: payload}

        case CHANGE_ACTIVE_PHOTO:
            return {...state, activePhoto: payload}


        default:
            return state
    }
}