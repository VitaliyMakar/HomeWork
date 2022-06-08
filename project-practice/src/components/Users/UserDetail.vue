<template>
  <div class="detail">
    <h3 style="margin-bottom: 10px">User Detail</h3>
    <div class="detail__item">Id: {{ activeUser.id }}</div>
    <div class="detail__item"><strong>Name:</strong> {{ activeUser.name }}</div>
    <div class="detail__item">
      <strong>UserName:</strong> {{ activeUser.username }}
    </div>
    <div class="detail__item">eMail: {{ activeUser.email }}</div>
    <div class="detail__item">Phone: {{ activeUser.phone }}</div>
    <div class="detail__item">Website: {{ activeUser.website }}</div>

    <MyButton class="btn" @click="closeDetail">Close</MyButton>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    activeUser: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeDetail() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped lang="scss">
.detail {
  display: flex;
  flex-direction: column;
  &__item {
    margin-bottom: 10px;
  }
}
.btn {
  align-self: flex-start;
}
</style>
