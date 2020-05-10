import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navigationDrawer: false,
    },
    mutations: {
        toggleNavigationDrawer(state) {
            state.navigationDrawer = !state.navigationDrawer;
        }
    },
    actions: {

    }
});