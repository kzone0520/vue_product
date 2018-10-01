'use strict';

// 导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css';
import './static/vendor/mui/dist/css/mui.css';
import './static/vendor/mui/dist/css/mui.min.css';
import Axios from 'axios';
import Moment from 'moment';
import VuePreview from 'vue-preview';
import VueLazyLoad from 'vue-lazyload';

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
import Funny from './components/funny/funny.vue';
import Funny_random from './components/funny/funny_random.vue';
import Funny_pic from './components/funny/funny_pic.vue';
import Funny_word from './components/funny/funny_word.vue';
import Funny_video from './components/funny/funny_video.vue';
import PageVue from './components/common/page.vue';
import MusicDetail from './components/music/musicDetail.vue';
import Weather from './components/weather/weather.vue'
import Chat from './components/chat/chat.vue';

// 安装注册组件
Vue.use(VueRouter);
Vue.use(Mint);
Vue.prototype.$axios = Axios;
Vue.component('navBar',NavBar);
Vue.filter('convertData', function(input){
    return Moment(input).format('YYYY-MM-DD HH:mm:ss');
});
Vue.use(VuePreview);
Vue.component('pageVue', PageVue);
Vue.use(VueLazyLoad, {
    preLoad: 2,
    error: require('./static/img/dahai.jpg'),
    loading: require('./static/img/pubu.jpg')
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
        {name: 'funny', path: '/funny', component: Funny, children: [
            {name: 'funny_random', path: 'funny_random', component: Funny_random},
            {name: 'funny_pic', path: 'funny_pic', component: Funny_pic},
            {name: 'funny_word', path: 'funny_word', component: Funny_word},
            {name: 'funny_video', path: 'funny_video', component: Funny_video},
        ]},
        { name: 'musicDetail', path: '/music/musicDetail', component: MusicDetail},
        { name: 'weather', path:'/weather', component: Weather},
        { name: 'chat', path: '/chat', component: Chat},
    ],
    linkActiveClass: "mui-active",
})


new Vue({
    el: '#app',
    router,
    render: c => c(App)
})