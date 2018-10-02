import Vue from 'vue';
import App from './typescript-starter.vue';
import '@/themes/common.scss';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
});
