<template>
  <div>
    <h3 v-if="!todos.length" style="color: red">No Todos</h3>
    <div v-else>
      <TodoItem
        v-bind:todo="todo"
        v-bind:key="todo.id"
        v-for="todo in todos"
        @delete="$emit('delete', todo)"
        @toggleCompleted="$emit('toggleCompleted', todo)"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
</style>