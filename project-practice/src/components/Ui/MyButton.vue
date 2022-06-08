<template>
  <button>
      <slot />  
  </button>
</template>

<script>
export default {
    name: 'MyButton'
};
</script>

<style scoped lang="scss">
button {
  padding: 5px;
  color: grey;
  background: none;
  border: 1px solid grey;
  &:hover {
    background-color: darkgray;
  }
}
</style>