<template>
  <div>
    <div>Likes {{ $store.state.counter.likes }}</div>
    <div>Dislikes {{ $store.state.counter.dislikes }}</div>
    <MyButton class="btn" @click="addLikes">+ like</MyButton>
    <MyButton class="btn" @click="addDislikes">+ like</MyButton>
    <MyButton class="btn" @click="clearCounter">Clear</MyButton>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      addLikes: "counter/addLikes",
      addDislikes: "counter/addDislikes",
      clearCounter: "counter/clearCounter",
    }),
  },
};
</script>

<style scoped lang="scss">
.btn {
  margin-right: 10px;
}
</style>