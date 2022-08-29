import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//引入Element框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


if(process.env.NODE_ENV==='development'){
    require('@/mock/index')
}
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
