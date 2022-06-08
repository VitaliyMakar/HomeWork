export const postModule = {
  state: () => ({
    posts: [],
    postsById: [],
    isLoading: true,
    selectSort: "",
    searchQuery: "",
    selectOptions: [
      { value: "", name: "unsorted" },
      { value: "title", name: "sort by PostName" },
      { value: "body", name: "sort by PostDescription" },
    ],
    totalPosts: 0,
    limit: 10,
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectSort]?.localeCompare(post2[state.selectSort])
      );
    },
    searchedSortedPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPostsById(state, postsById) {
      state.postsById = postsById;
    },
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setSelectSort(state, selectSort) {
      state.selectSort = selectSort;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setTotalPosts(state, totalPosts) {
      state.totalPosts = totalPosts;
    },
    setLimit(state, limit) {
      state.limit = limit;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        // this.isLoading = true;
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=15"
        )
          .then((response) => response.json())
          .then((json) => {
            setTimeout(() => {
              commit("setPosts", json);
              commit("setIsLoading", false);
            }, 1000);
          });
      } catch (e) {
        alert(e);
      }
    },
    async fetchPostsById({ commit }, userId) {
      try {
        commit("setIsLoading", true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?userId=" + userId
        )
          .then((response) => response.json())
          .then((json) => {
            setTimeout(() => {
              commit("setPostsById", json);
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
