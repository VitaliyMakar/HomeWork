export const counterModule = {
  state: {
    likes: 0,
    dislikes: 0,
  },
  mutations: {
    addLikes(state) {
      state.likes += 1;
    },
    addDislikes(state) {
      state.dislikes += 1;
    },
    clearCounter(state) {
      state.likes = 0;
      state.dislikes = 0;
    },
  },
  namespaced: true,
};
