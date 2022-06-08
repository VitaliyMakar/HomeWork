<template>
  <div class="todo">
    <div style="width: 80%">
      <div
        :class="todo.completed ? 'todo' : 'todo todo__active'"
        @click="toggleCompleted"
      >
        <strong>TodoTitle:</strong> {{ todo.title }}
      </div>
    </div>
    <div>
      <MyButton class="todo__btn" @click="deleteTodo">Delete</MyButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteTodo() {
      this.$emit("delete", this.todo);
    },
    toggleCompleted() {
      this.$emit("toggleCompleted", this.todo);
    },
  },
};
</script>

<style scoped lang="scss">
.todo {
  padding: 10px;
  border: 1px solid gray;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  &__active {
    background-color: rgba($color: #000000, $alpha: 0.3);
  }
  &__btn {
    margin-bottom: 10px;
    width: 100%;
  }
}
</style>