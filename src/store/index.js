import { createStore } from 'vuex'
import users from "@/store/users";
import todos from "@/store/todos";

export default createStore({
    namespaced: true,
    modules: {
        users,
        todos
    },
})