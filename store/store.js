import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navigationDrawer: false,
        categories: []
    },
    mutations: {
        toggleNavigationDrawer(state) {
            state.navigationDrawer = !state.navigationDrawer;
        },
        updateCategories(state, categories) {
            state.categories = categories;
        }
    },
    actions: {
        getCategories({ commit }) {
                axios.get('http://localhost:3000/categories')
                .then(categories => {
                    commit('updateCategories', categories);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
});