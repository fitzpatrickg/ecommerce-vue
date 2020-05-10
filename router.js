import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: () => import('./src/components/views/home/HomePage.vue')
        },
        {
            path: '/categories',
            name: 'ProductCategories',
            component: () => import('./src/components/views/productCategories/ProductCategories.vue')
        }
    ]
});