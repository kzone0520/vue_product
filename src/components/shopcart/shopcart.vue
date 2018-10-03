<template>
    <div class="tmpl">
        <nav-bar :title="title"></nav-bar>
        <ul v-if="musicList?true:false">
            <li class="goods" v-for="(music, index) in musicList" :key="index">
                <div class="goods-h">
                    <mt-switch class="switch" v-model="music.isPick"></mt-switch>
                    <img :src="music.pic_small" alt="封面" width="90" height="90">
                </div>
                <p class="goods-name">{{music.title}}   -  {{music.artist_name}}</p>
                <div class="goods-f">
                    <span class="price">￥2</span>
                    <span class="sub" @click="sub(index)">-</span>
                    <span class="num">{{music.num}}</span>
                    <span class="add" @click="add(index)">+</span>
                    <a class href="javascript:;" @click="del(index)">删除</a>
                </div>                
            </li>
        </ul>
        <p v-if="musicList.length===0?true:false" class="tip">
            购物车是空的，快去<router-link :to="{name: 'music'}">音乐商城</router-link>挑选些东西吧
        </p>
        <div class="settlement">
            <div></div>
            <span class="totle" >总计(不含运费):</span>
            <p>
                已选择<span>{{goodsCompute.num}}</span>样商品，总共<span>{{goodsCompute.sum}}</span>元
            </p>
            <mt-button class="danger" type="danger" @click="settlement">去结算</mt-button>
        </div>
    </div>
</template>

<script >
import pordsTools from '../common/pordsTools.js';
import VueBus from '../common/vueBus.js';
export default {
    data() {
        return {
            title: "购物车",
            musicList: [],
        }
    },
    methods: {
        sub(i){
            if (this.musicList[i].num <= 1) return;
            this.musicList[i].num --;
            // 修改localStorage及购物车上红色小球数字
            pordsTools.save(this.musicList[i], -1);
            VueBus.$emit('changenum', -1);
        },
        add(i){
            this.musicList[i].num ++;
            pordsTools.save(this.musicList[i], 1);
            VueBus.$emit('changenum', +1);
        },
        del(i){
            pordsTools.del(this.musicList[i]);
            VueBus.$emit('changenum', -this.musicList[i].num);
            this.musicList.splice(i, 1); // 这行代码需要放到上两行代码之后，否则删除后找不到musicList[i]这个对象
        },
        settlement(){
            this.$toast({
                    message: '暂不支持此功能',
                    position: 'middle',
                    duration: 1000
                });
        }
    },
    created() {
        let storage = window.localStorage;
        let obj = JSON.parse(storage.getItem('pords'));
        if (!obj) return; 
        for ( let type of Object.keys(obj) ){
            this.$axios.get('http://api.apiopen.top/musicRankingsDetails?type='+type).then(res=>{
                for (let item of res.data.result ){
                    if (Object.keys(obj[type]).indexOf(item.song_id) >= 0 ){
                        // 在每个音乐详情对象上挂载一个商品数量num的属性，这个值从localStorage中获取
                        // item.num = obj[type][item.song_id];
                        // item.isPick = true;
                        // 但是这种方法在Vue中无法双向绑定，改用 $set
                        this.$set(item, 'num', obj[type][item.song_id]);
                        this.$set(item, 'isPick', true);
                        this.$set(item, 'type', type);
                        this.musicList.push(item);
                    }
                }
            }).catch(err=>{
                console.log(err);
            })
        }
    },
    computed: {
        goodsCompute: function(){
            let num = 0;
            let sum = 0;
            this.musicList.forEach(ele=>{
                if (ele.isPick){
                    num += ele.num;
                    sum += ele.num*2;
                }
                // 没有else， 当isPick为false，会重新调用goodsCompute函数计算并返回值
                // computed计算属性会监视这个函数缩依赖的变量，当变量变换时，重新调用函数
            })
            return {
                num: num,
                sum: sum
            }
        }
    }
}
</script>

<style scoped >
    .goods {
        width: 96%;
        margin: 18px 0 10px 10px;
        border-bottom: 1px solid gray;
    }
    .goods-h {
        position: relative;
    }
    .goods-h img {
        margin-left: 100px;
    }
    .goods-h .switch {
        position: absolute;
    }
    .goods-name {
        margin-top: 8px;
        font-size: 18px;
        color: blue;
    }
    .price {
        font-weight: bold;
        margin-right: 6px; 
    }
    .sub, .num, .add {
        display: inline-block;
        width: 22px;
        height: 22px;
        border: 1px solid gray;
        text-align: center;
        line-height: 22px;
        margin-bottom: 4px;
    }
    .add {
        margin-right: 26px;
    }
    .settlement {
        position: fixed;
        bottom: 50px;
        height: 80px;
        width: 100%;
    }
    .settlement div {
        width: 100%;
        height: 100%;
        position: absolute;
        background: gray;
        opacity: 0.5;
    }
    .settlement .totle {
        position: absolute;
        top: 4px;
        left: 30px;
        font-size: 16px;
        color: gray;
    }
    .settlement p {
        position: absolute;
        top: 44px;
        left: 30px;
        font-size: 20px;
        color: black;
    }
    .settlement p>span {
        font-weight: bold;
    }
    .settlement .danger {
        position: absolute;
        bottom: 4px;
        right: 20px;
    }
    .tip {
        text-align: center;
        margin-top: 50%;
        font-size: 18px;
    }
    .tmpl {
        margin-bottom: 130px;
    }
</style>
