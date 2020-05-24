import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: () => import('./src/components/views/HomePage/HomePage.vue')
        },
        {
            path: '/categories',
            name: 'ProductCategories',
            component: () => import('./src/components/views/ProductCategories/ProductCategories.vue')
        },
        {
            path: '/product/:id',
            name: 'SingleProduct',
            component: () => import('./src/components/views/SingleProduct/SingleProduct.vue')
        },
        {
            path: '/categories/:name',
            name: 'SingleCategory',
            component: () => import('./src/components/views/SingleCategory/SingleCategory.vue')
        }
    ]
});