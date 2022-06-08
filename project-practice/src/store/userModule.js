export const userModule = {
    state: () => ({
      users: [],
      isLoading: true,
      selectSort: "",
      searchQuery: "",
      selectOptions: [
        { value: "", name: "unsorted"},
        { value: "name", name: "sort by Name" },
        { value: "username", name: "sort by UserName" },
      ],
      totalUsers: 0,
      limit: 10,
    }),
    getters: {
      sortedUsers(state) {
        return [...state.users].sort((user1, user2) =>
        user1[state.selectSort]?.localeCompare(user2[state.selectSort])
        );
      },
      searchedSortedUsers(state, getters) {
        return getters.sortedUsers.filter((user) =>
          user.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      },
    },
    mutations: {
      setUsers(state, users) {
        state.users = users;
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
      setTotalUsers(state, totalUsers) {
        state.totalUsers = totalUsers;
      },
      setLimit(state, limit) {
          state.limit = limit;
        },
    },
    actions: {
      async fetchUsers({ commit }) {
        try {
          // this.isLoading = true;
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          )
            .then((response) => response.json())
            .then((json) => {
              setTimeout(() => {
                commit("setUsers", json);
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
  