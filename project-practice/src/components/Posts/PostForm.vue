<template>
  <form @submit.prevent>
    <h3 style="margin-bottom: 10px">Create Post</h3>
    <MyInput class="my-input" v-model="post.title" type="text" placeholder="PostName" />
    <MyInput class="my-input" v-model="post.body" type="text" placeholder="PostDescription" />
    <MyButton class="btn" @click="addPost">Create Post</MyButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      this.$emit("create", this.post);
      this.post = {
        id: Date.now(),
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
}
.btn {
align-self: flex-start;
}
.my-input {
  margin-bottom: 10px;
}
</style>
