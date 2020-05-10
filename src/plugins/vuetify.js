import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        primary: '#FF652F',
        secondary: '#747474',
        success: '#FFE400',
        info: '#14A76C',
        error: '#ED4337'
    }
});

export default new Vuetify({});
