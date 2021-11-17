import {ADD_CARD, REMOVE_CARD} from "./actions";

export const addNewCard = (card) => {
    return {
        type: ADD_CARD,
        payload: {...card, id: Date.now(), favorit: false},
    }
}

export const removeCard = cardId => {
    return {
        type: REMOVE_CARD,
        payload: cardId
    }
}