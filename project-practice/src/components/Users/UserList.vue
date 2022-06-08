<template>
  <div v-if="users.length > 0">
   
    <UserItem v-bind:user="user" v-bind:key="user.id" v-for="user in users" />
  </div>
  
  <h3 v-else style="color: red">No Users</h3>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: {
    UserItem,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.user-nav {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>