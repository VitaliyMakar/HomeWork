<template>
  <input type="text" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
input {
  padding: 5px;
  border: 1px solid grey;
}
</style>