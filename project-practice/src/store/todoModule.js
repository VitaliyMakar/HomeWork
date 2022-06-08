export const todoModule = {
  state: () => ({
    todos: [],
    todosById: [],
    isLoading: true,
    selectSort: "",
    searchQuery: "",
    selectOptions: [
      { value: "", name: "unsorted" },
      { value: "title", name: "sort by TodoName" },
    ],
    totalTodos: 0,
    limit: 10,
  }),
  getters: {},
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    setTodosById(state, todosById) {
      state.todosById = todosById;
    },
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setSelectSort(state, selectSort) {
      state.selectSort = selectSort;
    },
    setTotalPosts(state, totalPosts) {
      state.totalPosts = totalPosts;
    },
    setLimit(state, limit) {
      state.limit = limit;
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      try {
        // this.isLoading = true;
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=15"
        )
          .then((response) => response.json())
          .then((json) => {
            setTimeout(() => {
              commit("setTodos", json);
              commit("setIsLoading", false);
            }, 1000);
          });
      } catch (e) {
        alert(e);
      }
    },
    async fetchTodosById({ commit }, userId) {
      try {
        commit("setIsLoading", true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?userId=" + userId
        )
          .then((response) => response.json())
          .then((json) => {
            setTimeout(() => {
              commit("setTodosById", json);
              commit("setIsLoading", false);
            }, 1000);
          });
      } catch (e) {
        alert(e);
      }
    },
  },
  namespaced: true,
};
