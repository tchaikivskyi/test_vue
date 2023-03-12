import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: () => import('./pages/Login')
        },
        {
            path: '/todos',
            name: 'Todos',
            component: () => import('./pages/Todos')
        },
        // {
        //     path: "*",
        //     redirect: { name: "Todos"}
        // }
    ],
})

router.beforeEach(async () => {
    // const isAuthenticated = await localStorage.getItem('userId');

    return true
})

export default router;