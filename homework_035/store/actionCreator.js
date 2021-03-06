import {ADD_COUNTER, ADD_DEC_COUNTER, ADD_NUMBER_COUNTER} from "./actions";


//Функции содают события, возвращают нзвание и необходимое свойство
export const addCounterValue = () => {
    return {
        type: ADD_COUNTER
    }
}

export const addDecToCounter = () => {
    return {
        type: ADD_DEC_COUNTER
    }
}

export const addNumberToCount = (number) => {
    return {
        type: ADD_NUMBER_COUNTER,
        payload: number
    }
}