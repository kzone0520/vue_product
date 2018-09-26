'use strict';

// 导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css';
import Axios from 'axios';
// 导入自己的包
import App from './app.vue';
import Home from './components/home/home.vue';

// 安装注册组件
Vue.use(VueRouter);
Vue.use(Mint);
Vue.prototype.$axios = Axios;

let router = new VueRouter({
    routes: [
        { path: '/', redirect: {name: 'home'} },
        { name: 'home', path: '/home', component: Home},

    ],
})


new Vue({
    el: '#app',
    router,
    render: c => c(App)
})