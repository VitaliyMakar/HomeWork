import { createStore } from "redux";
import reducer from "./reducer";

// Созаем и экспортируем глобальное хранилище, принимаем результат функции reducer
const store = createStore( reducer );

export default store;