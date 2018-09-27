'use strict';

// 导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css';
import './static/vendor/mui/dist/css/mui.css';
import Axios from 'axios';
import Moment from 'moment';
import VuePreview from 'vue-preview';

// 导入自己的包
import App from './app.vue';
import Home from './components/home/home.vue';
import Vip from './components/vip/vip.vue';
import Shopcart from './components/shopcart/shopcart.vue';
import Music from './components/music/music.vue';
import './static/css/global.css';
import News from './components/news/news.vue';
import NavBar from './components/common/navBar.vue';
import Picture from './components/picture/picture.vue';

// 安装注册组件
Vue.use(VueRouter);
Vue.use(Mint);
Vue.prototype.$axios = Axios;
Vue.component('navBar',NavBar);
Vue.filter('convertData', function(input){
    return Moment(input).format('YYYY-MM-DD HH:mm:ss');
});
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})

// 拦截器，给请求加loadi加图标
Axios.interceptors.request.use(function(config){
    Mint.Indicator.open();
    return config;
});
Axios.interceptors.response.use(function(config){
    Mint.Indicator.close();
    return config;
});

let router = new VueRouter({
    routes: [
        { path: '/', redirect: {name: 'home'} },
        { name: 'home', path: '/home', component: Home},
        { name: 'vip', path: '/vip', component: Vip},
        { name: 'shopcart', path: '/shopcart', component: Shopcart},
        { name: 'music', path: '/music', component: Music},
        { name: 'news', path: '/news', component: News},
       { name: 'picture', path: '/picture/', component: Picture},


    ],
    linkActiveClass: "mui-active",
})


new Vue({
    el: '#app',
    router,
    render: c => c(App)
})