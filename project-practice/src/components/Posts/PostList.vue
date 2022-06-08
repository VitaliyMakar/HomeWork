<template>
  <div>
    <h3 v-if="!posts.length" style="color: red">No Posts</h3>
    <div v-else>
      <PostItem
        v-bind:post="post"
        v-bind:key="post.id"
        v-for="post in posts"
        @delete="$emit('delete', post)"
      />
    </div>
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
</style>