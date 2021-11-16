import {ADD_COUNTER, ADD_DEC_COUNTER, ADD_NUMBER_COUNTER} from "./actions";

// Определяем значение необходимого начального состояния
const initialState = {
    count: 0,
}

// Функция reducer возвращает обновленное состоние, принимает начальное состояние и свойство события "action",
// в соотвентствии с названием события
const reducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_COUNTER:
            return { ...state, count: state.count + 1 }

        case ADD_DEC_COUNTER:
            return { ...state, count: state.count + 10}

        case ADD_NUMBER_COUNTER:
            return { ...state, count: state.count + action.payload }

        default:
            return state;
    }

}

export default reducer