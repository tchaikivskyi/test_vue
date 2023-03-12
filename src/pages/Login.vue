
<template>
  <div class="login">
    <MainForm title="Login form">
      <form>
        <input type="text"
               :value="$store.state.users.user.username"
               @keydown="(e) => validateInput(e, /^[a-z\s]+$/i)"
               @change="(e) => $store.commit('inputUsername', e.target.value)"
               placeholder="Username">
        <input type="text"
               :value="$store.state.users.user.phone"
               @keydown="(e) => validateInput(e, /^[\d+\- ()]*$/, 'phone')"
               @change="(e) => $store.commit('inputPhone', e.target.value)"
               placeholder="Phone Number">
        <div class="error" v-if="$store.state.users.error">Login error</div>
        <input type="button"
               @click="$store.dispatch('login', {
                 username: $store.state.users.user.username,
                 phone: $store.state.users.user.phone
               })"
               value="Register">
      </form>
    </MainForm>
  </div>
</template>

<script>

import MainForm from "@/components/Form.vue";

export default {
  name: "LoginPage",
  components: {MainForm},
  methods: {
    validateInput(event, allowedRegex) {
      if (allowedRegex.test(event.key)
          || event.key === 'Backspace'
          || event.key === 'Tab'
          || event.key === 'x') {
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    }
  },
  created() {
    if(localStorage.getItem('userId')) {
      this.$router.push('todos')
    }
  }
}
</script>
