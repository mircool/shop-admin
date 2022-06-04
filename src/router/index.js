import { createRouter, createWebHashHistory } from "vue-router";
import home from '~/pages/index.vue'
import login from '~/pages/login.vue'
import NotFound from '~/pages/404.vue'


const routes = [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    {
        path: "/",
        name: "home",
        component: home
    },
    {
        path: "/login",
        name: "login",
        component: login
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
