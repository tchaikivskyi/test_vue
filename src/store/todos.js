import todosApi from "@/resources/todosApi";


export default {
    state () {
        return {
            list: null,
            searchList: null,
            loader: true,
            status: 'all',
            usersIds: null,
            searchValue: ''
        }
    },
    mutations: {
        setTodos (state, todos) {
            state.list = todos
            state.searchList = todos
        },
        setStatusLoader (state, status) {
            state.loader = status
        },
        addTodo (state, todo) {
            state.list = [...state.list, todo]
            state.searchList = state.list
        },
        changeSearchValue (state, value) {
            state.searchValue = value

            if(value !== '') {
                state.searchList = state.list.filter(item => item.title.includes(value))
            }
        },
    },
    actions: {
        getTodos: async ({commit}, {id, status}) => {
            commit('setStatusLoader', true)
            commit('changeSearchValue', '')

            await todosApi.getTodos(id, status).then((res) => {
                if(res.status !== 200) {
                    console.log('error')
                    return false
                }
                commit('setStatusLoader', false)
                commit('setTodos', res.data)
            })
        },
        create: async ({commit}, todo) => {
            todosApi.create(todo).then(res => {
                if (res.status !== 201) {
                    console.log('error')
                    return false
                }

                commit('addTodo', todo)
            })
        }
    }
}