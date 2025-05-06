import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {name: 'login', path: '/login', component: () => import('./views/Login.vue')},
    {name: 'disputes', path: '/disputes', component: () => import('./views/DisputeManager.vue')},
    {name: 'dispute-id', path: '/disputes/:id', component: () => import('./views/Dispute.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;