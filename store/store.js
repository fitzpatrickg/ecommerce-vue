import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navigationDrawer: false,
        categories: [],
        products: []
    },
    mutations: {
        toggleNavigationDrawer(state) {
            state.navigationDrawer = !state.navigationDrawer;
        },
        updateCategories(state, categories) {
            state.categories = categories;
        },
        updateProducts(state, products) {
            state.products = products;
        }
    },
    actions: {
        getCategories({ commit }) {
                axios.get('http://localhost:3000/categories')
                .then(categories => {
                    commit('updateCategories', categories);
                })
                .catch(error => console.log(error));
        },
        getProductsByCategory({ commit }, categoryName) {
            axios.get(`http://localhost:3000/categories/${categoryName}`)
                .then(products => {
                    commit('updateProducts', products);
                })
                .catch(error => console.log(error));
        }
    }
});