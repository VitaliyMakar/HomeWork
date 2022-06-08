<template>
  <div>
    <h1>Posts</h1>
    <div class="funk-items">
      <MyButton v-on:click="showModal">Add Post</MyButton>
      <div>
        <MyInput v-model="searchQuery" placeholder="Search Posts"> </MyInput>
        <MyButton @click="searchQueryClear">Clear</MyButton>
      </div>
      <MySelect v-model="selectSort" v-bind:options="selectOptions" />
    </div>
    <hr />
    <ModalDialog v-model:show="modalShow">
      <Form @create="addPost" />
    </ModalDialog>
    <div v-if="isLoading">Loading...</div>
    <PostList
      v-bind:posts="searchedSortedPosts.slice(0, this.limit)"
      @delete="deletePost"
      v-else
    />
    <div v-if="this.limit < searchedSortedPosts.length">
      <myButton @click="this.limit += 5">more...</myButton>
    </div>
  </div>
</template>

<script>
import PostList from "../components/Posts/PostList.vue";
import Form from "../components/Posts/PostForm.vue";

export default {
  components: {
    PostList,
    Form,
  },
  data() {
    return {
      posts: [],
      modalShow: false,
      isLoading: true,
      selectSort: "",
      searchQuery: "",
      selectOptions: [
        { value: "title", name: "sort by PostName" },
        { value: "body", name: "sort by PostDescription" },
      ],
      totalPosts: 0,
      limit: 10,
    };
  },
  methods: {
    searchQueryClear() {
      this.searchQuery = this.searchQuery.slice(0, -1);
      // this.searchQuery = ""
    },
    addPost(post) {
      this.posts.push(post);
      this.modalShow = false;
    },
    deletePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showModal() {
      this.modalShow = true;
    },
    async fetchPosts() {
      try {
        // this.isLoading = true;
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=15"
        )
          .then((response) => response.json())
          .then((json) => {
            setTimeout(() => {
              this.posts = json;
              this.isLoading = false;
            }, 1000);
          });
      } catch (e) {
        alert(e);
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectSort]?.localeCompare(post2[this.selectSort])
      );
    },
    searchedSortedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
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
