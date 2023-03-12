import userApi from "@/resources/userApi";
import router from '../router'

export default {
    state () {
        return {
            error: false,
            user: {
                username: '',
                phone: ''
            },
            selectedUser: null,
            countUsers: 0,
            currentUser: null
        }
    },
    mutations: {
        inputUsername (state, username) {
            state.user.username = username
        },
        inputPhone (state, phone) {
            state.user.phone = phone
        },
        changeStatusError(state, status) {
            state.error = status
        },
        setUser(state, user) {
            state.currentUser = user
            if(user) {
                state.selectedUser = user.id
            }
        },
        setCountUsers(state, count) {
            state.countUsers = count
        }
    },
    actions: {
        login: async ({commit}, user) => {
            //Bret
            //1-770-736-8031 x56442
            if(!user.username || !user.phone) {
                commit('changeStatusError', true)
                return false
            }

            await userApi.getAll().then(({data}) => {
                const foundedUser = data.find(item => {
                    console.log(data)
                    return item.username === user.username
                })

                console.log(foundedUser)

                if(!foundedUser) {
                    console.log(2)
                    commit('changeStatusError', true)
                    return false
                }

                if(foundedUser.phone !== user.phone) {
                    console.log(3)
                    commit('changeStatusError', true)
                    return false
                }

                commit('changeStatusError', false)
                commit('setUser', foundedUser)
                localStorage.setItem('userId', foundedUser.id)
                router.push({name: 'Todos'})
            })
        },
        logout({commit}) {
            commit('setUser', null)
            localStorage.removeItem('userId')
            router.push({name: 'Login'})
        },
        getUser: async ({commit}, id) => {
            await userApi.getOne(id).then(res => {
                if(res.status !== 200) {
                    commit('setUser', null)
                    localStorage.removeItem('userId')
                    router.push({name: 'Login'})
                }
                commit('setUser', res.data)
            })
        },
        getCountUsers: async ({commit}) => {
            await userApi.getAll().then(res => {
                if(res.status !== 200) {
                    console.log('error')
                }
                commit('setCountUsers', res.data.length)
            })
        }
    }
}