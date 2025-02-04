import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/default/Default.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/Home.vue')
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('@/views/About.vue')
            },
            {
                path: '/products',
                name: 'Products',
                component: () => import('@/views/Products.vue')
            },
            {
                path: '/cart',
                name: 'Cart',
                component: () => import('@/views/Cart.vue')
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    // history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router;