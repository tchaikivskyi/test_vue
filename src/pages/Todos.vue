<template>
  <div>
    <MainHeader/>
    <div class="todos">
      <MainForm title="Create todo">
        <form>
          <input type="text" v-model="todo.userId" placeholder="User id">
          <input type="text" v-model="todo.title" placeholder="Title">
          <div class="error" v-if="newTodoError">Something error</div>
          <input type="button" @click="createTodo" value="Add">
        </form>
      </MainForm>
      <FilterList/>
      <TodoList/>
    </div>
  </div>
</template>

<script>

import MainHeader from "@/components/Header.vue";
import TodoList from "@/components/TodoList.vue";
import FilterList from "@/components/FilterList.vue";
import MainForm from "@/components/Form.vue";

export default {
  name: "TodosPage",
  components: {MainForm, FilterList, TodoList, MainHeader},
  data() {
    return {
      todo: {
        userId: '',
        title: '',
        completed: false,
      },
      newTodoError: false,
    }
  },
  methods: {
    async createTodo() {
      const {userId, title} = this.todo
      const isExist = this.$store.state.todos.list.find(todo => todo.title === title)

      if (!userId || title.length < 3 || isExist) {
        this.newTodoError = true
        return false
      }

      const res = this.$store.dispatch('create', this.todo)

      if (!res) {
        this.newTodoError = true
        return false
      }

      this.newTodoError = false
      this.todo = {
        userId: '',
        title: '',
        completed: false
      }
    },
  }
}
</script>

<style scoped lang="scss">

.todos .form {
  width: 100%;
  max-width: 100%;
}

</style>