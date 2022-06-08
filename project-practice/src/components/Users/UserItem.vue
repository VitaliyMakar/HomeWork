<template>
  <div
    :class="
      $store.state.activeUser.id !== user.id ? 'user' : 'user user__active'
    "
  >
    <div style="width: 80%" @click="setActive">
      <div>Id: {{ user.id }}</div>
      <div><strong>Name:</strong> {{ user.name }}</div>
      <div><strong>UserName:</strong> {{ user.username }}</div>
    </div>
    <div>
      <MyButton class="post__btn" @click="toggleModal">Details</MyButton>
    </div>
    <ModalDialog v-model:show="modalShow">
      <UserDetail
        v-bind:activeUser="this.user"
        v-bind:key="user.id"
        @close="toggleModal"
      />
    </ModalDialog>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    UserDetail,
  },
  data() {
    return {
      modalShow: false,
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      setActiveUser: "setActiveUser",
    }),
    toggleModal() {
      this.modalShow = !this.modalShow;
    },
    setActive() {
      this.setActiveUser(this.user);
    },
  },
};
</script>

<style scoped lang="scss">
.user {
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