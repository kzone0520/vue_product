'use strict';

// 导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import Moment from 'moment';
import VuePreview from 'vue-preview';
import VueResource from 'vue-resource';

// 引入样式
import '../node_modules/mint-ui/lib/style.css';
import './static/vendor/mui/dist/css/mui.css';
import './static/vendor/mui/dist/css/mui.min.css';
import './static/css/global.css';
import 'vue2-animate/dist/vue2-animate.min.css';

// mint-ui 按需引入 开始
import Header from 'mint-ui/lib/header';
import Switch from 'mint-ui/lib/switch';
import Swipe from 'mint-ui/lib/swipe';
import SwipeItem from 'mint-ui/lib/swipe-item';
import Lazyload from 'mint-ui/lib/lazyload';
import Loadmore from 'mint-ui/lib/loadmore';
import Indicator from 'mint-ui/lib/indicator';
import Button from 'mint-ui/lib/button';
import Toast from 'mint-ui/lib/toast';
Vue.component(Header.name, Header);
Vue.component(Switch.name, Switch);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Button.name, Button);
// 踩坑之路啊！！！按官方文档 import 之后直接可以在组件中Toast("msg")，是错误的！！！
// 网上找的解决方法是 this.$toast("msg")，在全部引入mint-ui情况下是没问题的。
// 但是如果按需引入的话就必须写下面这句话 将它加到Vue的原型链上！！！
Vue.prototype.$toast = Toast;
Vue.use(Lazyload);
// mint-ui 按需引入 结束


// 导入自己的包
import App from './app.vue';
//按需加载
// const Foo = resolve => require(['./Foo.vue'], resolve)
const Home = resolve =>require([ './components/home/home.vue'], resolve);
const Vip = resolve =>require([ './components/vip/vip.vue'], resolve);
const Shopcart = resolve =>require([ './components/shopcart/shopcart.vue'], resolve);
const Music = resolve =>require([ './components/music/music.vue'], resolve);
const News = resolve =>require([ './components/news/news.vue'], resolve);
const Picture = resolve =>require([ './components/picture/picture.vue'], resolve);
const Funny = resolve =>require([ './components/funny/funny.vue'], resolve);
const Funny_random = resolve =>require([ './components/funny/funny_random.vue'], resolve);
const Funny_pic = resolve =>require([ './components/funny/funny_pic.vue'], resolve);
const Funny_word = resolve =>require([ './components/funny/funny_word.vue'], resolve);
const Funny_video = resolve =>require([ './components/funny/funny_video.vue'], resolve);
const MusicDetail = resolve =>require([ './components/music/musicDetail.vue'], resolve);
const Weather = resolve =>require([ './components/weather/weather.vue'], resolve);
const Contact = resolve =>require([ './components/contact/contact.vue'], resolve);
const setting = resolve =>require([ './components/setting.vue'], resolve);
//引入全局组件需要的组件对象 
import NavBar from './components/common/navBar.vue';
import PageVue from './components/common/page.vue';

// 安装注册组件
Vue.use(VueRouter);
Vue.prototype.$axios = Axios;
// 过滤器
Vue.filter('convertData', function(input){
    return Moment(input).format('YYYY-MM-DD HH:mm:ss');
});
Vue.use(VuePreview);
Vue.component('navBar',NavBar);
Vue.component('pageVue', PageVue);
Vue.use(VueResource);

// 拦截器，给请求加loadding加图标
Axios.interceptors.request.use(function(config){
    Indicator.open();
    return config;
});
Axios.interceptors.response.use(function(config){
    Indicator.close();
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
        { name: 'contact', path: '/contact', component: Contact},
        { name: 'setting', path: '/setting', component: setting},
        { name: 'chat', path: '/chat', component: Chat },
    ],
    linkActiveClass: "mui-active",
})


new Vue({
    el: '#app',
    router,
    render: c => c(App)
})