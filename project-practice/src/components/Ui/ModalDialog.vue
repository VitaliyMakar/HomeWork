<template>
  <div class="modal-dialog" v-if="show" v-on:click.stop="hideModal">
    <div class="modal-dialog__content" v-on:click.stop>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalDialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false)
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-dialog {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  &__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
  }
}
</style>