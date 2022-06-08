import { createStore } from "vuex";
import { userModule } from "./userModule";
import { postModule } from "./postModule";
import { todoModule } from "./todoModule";
import { counterModule } from "./counterModule";

export default createStore({
  state: {
    activeUser: '',
  },
  mutations: {
    setActiveUser(state, activeUser) {
      state.activeUser = activeUser;
    },
  },
  modules: {
    user: userModule,
    post: postModule,
    todo: todoModule,
    counter: counterModule,
  },
});
