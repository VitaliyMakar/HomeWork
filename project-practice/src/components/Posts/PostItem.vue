<template>
  <div class="post">
    <div style="width: 80%">
      <div><strong>PostName:</strong> {{ post.title }}</div>
      <div><strong>PostDescription:</strong> {{ post.body }}</div>
    </div>
    <div>
      <MyButton class="post__btn" @click="deletePost">Delete</MyButton>
      <MyButton class="post__btn" @click="$router.push('/posts/' + post.id)"
        >Open</MyButton
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deletePost() {
      this.$emit("delete", this.post);
    },
  },
};
</script>

<style scoped lang="scss">
.post {
  padding: 10px;
  border: 1px solid gray;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  &__btn {
    margin-bottom: 10px;
    width: 100%;
  }
}
</style>