<template>
  <div>
    <h1>Posts</h1>
    <div class="funk-items">
      <MyButton v-on:click="showModal">Add Post</MyButton>
      <div>
        <MyInput
          :model-value="searchQuery"
          @update:model-value="setSearchQuery"
          placeholder="Search Posts"
        />
        <MyButton @click="searchQueryClear">Clear</MyButton>
      </div>
      <MySelect
        :model-value="selectSort"
        @update:model-value="setSelectSort"
        :options="selectOptions"
      />
    </div>
    <hr style="margin-bottom: 10px" />
    <ModalDialog v-model:show="modalShow">
      <PostForm @create="addPost" />
    </ModalDialog>
    <div v-if="isLoading">Loading...</div>
    <PostList
      v-bind:posts="searchedSortedPosts.slice(0, this.limit)"
      @delete="deletePost"
      v-else
    />
    <div v-if="this.limit < searchedSortedPosts.length">
      <myButton @click="this.setLimit((this.limit += 5))">5 more...</myButton>
    </div>
  </div>
</template>

<script>
import PostList from "../components/Posts/PostList.vue";
import PostForm from "../components/Posts/PostForm.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      modalShow: false,
    };
  },
  methods: {
    ...mapMutations({
      setPosts: "post/setPosts",
      setLimit: "post/setLimit",
      setSearchQuery: "post/setSearchQuery",
      setSelectSort: "post/setSelectSort",
    }),
    ...mapActions({
      fetchPosts: "post/fetchPosts",
    }),

    searchQueryClear() {
      this.setSearchQuery(this.searchQuery.slice(0, -1));
      // this.searchQuery = ""
    },
    addPost(post) {
      this.posts.push(post);
      this.setPosts(this.posts);
      this.modalShow = false;
    },
    deletePost(post) {
      this.setPosts(this.posts.filter((p) => p.id !== post.id));
    },
    showModal() {
      this.modalShow = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isLoading: (state) => state.post.isLoading,
      selectSort: (state) => state.post.selectSort,
      searchQuery: (state) => state.post.searchQuery,
      selectOptions: (state) => state.post.selectOptions,
      totalPosts: (state) => state.post.totalPosts,
      limit: (state) => state.post.limit,
    }),
    ...mapGetters({
      searchedSortedPosts: "post/searchedSortedPosts",
    }),
  },
};
</script>

<style scoped lang="scss">
.funk-items {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
}
</style>
