<template>
  <header>
    <span class="logo">Todo List</span>
    <div v-if="$store.state.users.currentUser">
      <span>{{ $store.state.users.currentUser.name }}</span>
      <span class="avatar"
            :style="{ backgroundImage: `url(${require('@/assets/images/exit.svg')})` }"
            @click="$store.dispatch('logout')"
      ></span>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  created() {
    const user = localStorage.getItem('userId')
    if (!user) this.$router.push({name: 'Login'})
    this.$store.dispatch('getUser', user)
  }
}
</script>

<style scoped lang="scss">
header {
  height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 20px;
  }

  > div {
    display: flex;
    align-items: center;

    .avatar {
      width: 20px;
      height: 20px;
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
      display: block;
      margin-left: 10px;
    }
  }
}
</style>