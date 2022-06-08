<template>
  <div class="navbar">
    <div>My App</div>
    <div>
      <MyButton class="navbar__btn" @click="$router.push('/')">Home</MyButton>
       <MyButton class="navbar__btn" @click="$router.push('/users')"
        >Users Store</MyButton
      >
      <MyButton class="navbar__btn" @click="$router.push('/posts')"
        >Posts Store</MyButton
      >
      <MyButton class="navbar__btn" @click="$router.push('/posts-not-store')"
        >Posts NOT Store</MyButton
      >
      <MyButton class="navbar__btn" @click="$router.push('/likes-counter')"
        >Likes Counter</MyButton
      >
      <MyButton class="navbar__btn" @click="$router.push('/about')"
        >About</MyButton
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 2px gray;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  &__btn {
    margin-left: 10px;
  }
}
</style>