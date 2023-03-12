<template>
  <div class="filters">
    <div class="filter">
      Status:
      <select :value="$store.state.todos.status" @change="(e) => $store.dispatch('getTodos', {
        id: $store.state.users.selectedUser,
        status: e.target.value
      })">
        <option value="all">All</option>
        <option :value="true">Completed</option>
        <option :value="false">Uncompleted</option>
      </select>
    </div>
    <div class="filter">
      User ID:
      <select :value="$store.state.users.selectedUser" @change="(e) => $store.dispatch('getTodos', {
        id: e.target.value,
        status: $store.state.todos.status
      })">
        <option v-for="user in $store.state.users.countUsers" :key="user" :value="user">{{ user }}</option>
      </select>
    </div>
    <div class="filter">
      Search by title:
      <input type="text"
             :value="$store.state.todos.searchValue"
             @input="(e) => $store.commit('changeSearchValue', e.target.value)"
             placeholder="Search"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterList",
  created() {
    this.$store.dispatch('getCountUsers')
  }
}
</script>

<style scoped lang="scss">
.filters {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #A5A5A5;
  color: #5F5F5F;
  padding: 10px 15px;
  margin: 15px 0;

  @media screen and (min-width: 767px) {
    flex-direction: row;

    .filter {
      margin-bottom: 0;
    }
  }

  .filter {
    margin-bottom: 5px;
    margin-right: 15px;
    font-size: 14px;

    select, input {
      border: none;
      outline: none;
    }

    select {
      padding: 3px 5px;
    }

    input {
      padding: 5px;
    }
  }
}
</style>