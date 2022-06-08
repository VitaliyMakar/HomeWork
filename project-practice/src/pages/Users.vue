<template>
  <div>
    <h1>Users</h1>
    <div class="funk-items">
      <div>
        <MyInput
          :model-value="searchQuery"
          @update:model-value="setSearchQuery"
          placeholder="Search Users"
        />
        <MyButton @click="searchQueryClear">Clear</MyButton>
      </div>
      <MySelect
        :model-value="selectSort"
        @update:model-value="setSelectSort"
        :options="selectOptions"
      />
    </div>
    <hr />
    <div>
      <div class="user-nav">
        <h3 style="margin: 15px 0">
          Active User: <em>{{ $store.state.activeUser.name }}</em>
        </h3>
        <div style="margin-bottom: 10px">
          <MyButton
            :class="dataShow === 'todo' ? 'btn-selected' : ''"
            @click="this.dataShow = 'todo'"
            >User Todos</MyButton
          >
          <MyButton 
          :class="dataShow === 'post' ? 'btn-selected' : ''"
          style="margin-left: 10px" @click="this.dataShow = 'post'"
            >User Posts</MyButton
          >
        </div>
      </div>
      <div class="user-container">
        <div class="user-container__users">
          <div v-if="isLoading">Loading...</div>
          <UserList v-bind:users="searchedSortedUsers" v-else />
        </div>

        <div v-if="dataShow === 'todo'">
          <div style="margin-left: 20px" v-if="!todosById.length">
            Select User to see Todos
          </div>
          <div v-else class="user-container__list">
            <h3 style="margin-bottom: 10px">
              Todos from: {{ this.activeUser.name }} / UserId:
              {{ this.activeUser.id }}
            </h3>
            <TodoList v-bind:todos="todosById" @delete="deleteTodo" @toggleCompleted="completedToggle" />
          </div>
        </div>

        <div v-else-if="dataShow === 'post'">
          <div style="margin-left: 20px" v-if="!postsById.length">
            Select User to see Posts
          </div>
          <div v-else class="user-container__list">
            <h3 style="margin-bottom: 10px">
              Posts from: {{ this.activeUser.name }} / UserId:
              {{ this.activeUser.id }}
            </h3>
            <PostList v-bind:posts="postsById" @delete="deletePost" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import UserList from "../components/Users/UserList.vue";
import PostList from "../components/Posts/PostList.vue";
import TodoList from "../components/Todos/TodoList.vue";

export default {
  components: {
    UserList,
    PostList,
    TodoList,
  },
  data() {
    return {
      dataShow: "",
    };
  },
  methods: {
    ...mapMutations({
      setUsers: "user/setUsers",
      setSearchQuery: "user/setSearchQuery",
      setSelectSort: "user/setSelectSort",
      setPostsById: "post/setPostsById",
      setTodosById: "todo/setTodosById",
    }),
    ...mapActions({
      fetchUsers: "user/fetchUsers",
      fetchPostsById: "post/fetchPostsById",
      fetchTodosById: "todo/fetchTodosById",
    }),
    searchQueryClear() {
      this.setSearchQuery(this.searchQuery.slice(0, -1));
    },
    deletePost(post) {
      this.setPostsById(this.postsById.filter((p) => p.id !== post.id));
    },
    deleteTodo(todo) {
      this.setTodosById(this.todosById.filter((t) => t.id !== todo.id));
    },
    completedToggle(todo) {
      todo.completed = !todo.completed
      this.setTodosById(this.todosById)
      console.log(todosById)
    }
  },
  mounted() {
    this.fetchUsers();
  },
  watch: {
    activeUser() {
      this.fetchPostsById(this.activeUser.id);
      this.fetchTodosById(this.activeUser.id);
    },
  },
  computed: {
    ...mapState({
      users: (state) => state.user.users,
      postsById: (state) => state.post.postsById,
      todosById: (state) => state.todo.todosById,
      activeUser: (state) => state.activeUser,
      isLoading: (state) => state.user.isLoading,
      selectSort: (state) => state.user.selectSort,
      searchQuery: (state) => state.user.searchQuery,
      selectOptions: (state) => state.user.selectOptions,
      totalUsers: (state) => state.user.totalUsers,
      limit: (state) => state.user.limit,
    }),
    ...mapGetters({
      searchedSortedUsers: "user/searchedSortedUsers",
    }),
  },
};
</script>

<style scoped lang="scss">
.funk-items {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.user-container {
  display: flex;
  &__users {
    min-width: 35%;
  }
  &__list {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
  }
}
.btn-selected {
  background-color: rgba($color: #000000, $alpha: 0.3);
}
</style>