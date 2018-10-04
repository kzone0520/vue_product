<template>
    <div class="tmpl">
        <nav-bar :title="title"></nav-bar>
        <div>
            <div class="pic">
                <div class="wrap">
                    <img :src="songDetail.pic_radio" alt="封面" width="200" height="200">
                    <audio src="" controls="controls"></audio>
                
                </div>
            </div>
            <div class="price">
                <h3>曲名：{{songDetail.title}}</h3>
                <div class="markprice">
                    <span>市场价：<s>￥4</s></span><span>销售价：<strong style="color:red;font-size:24px">￥2</strong></span>
                    <br>
                    <div class="buyNum">
                        购买数量： 
                        <input type="button" value="-" @click="reducegGoods">
                        <input type="button" disabled="disabled" :value="num">
                        <input type="button" value="+" @click="addGoods">
                    </div><br>
                    <mt-button class="btn" type="primary" @click="buynow">立即购买</mt-button>
                    <mt-button class="btn danger" type="danger" @click="addShopcart">
                        加入购物车
                        <transition name="ball" @after-enter="afterEnter">
                            <div class="ball" v-if="isShow"></div>
                        </transition>
                    </mt-button>
                </div>
            </div>
            <div class="info">
                <p>歌手：{{songDetail.author}}</p>
                <p>专辑：{{songDetail.album_title}}</p>
                <p>地区：{{songDetail.country}}</p>
                <p>语言：{{songDetail.language}}</p>
                <p>出品方：{{songDetail.si_proxycompany}}</p>
            </div>
        </div>

    </div>
</template>

<script >
    import VueBus from '../common/vueBus.js';
    import pordsTools from '../common/pordsTools.js';
    export default {
        data() {
            return {
                title: '歌曲详情',
                type: '',
                song_id: '',
                songDetail: {},
                num: 1,
                isShow: false,
            }
        },
        methods: {
            reducegGoods(){
                if (this.num>1){
                    this.num--
                }
            },
            addGoods(){
                this.num++
            },
            buynow(){
                this.$toast('暂不支持此功能');
            },  
            addShopcart(){
                VueBus.$emit('changenum',this.num);
                pordsTools.save(this.songDetail, this.num);
                /* // 将对localStorage的操作封装成pordsTool里的函数
                let storage = localStorage;
                // 从本地中获取信息或者为空对象
                let obj = JSON.parse(storage.getItem('pords') || '{}');
                // 判断这个分类是否存在 （存储分类是为了在购物车里方便获取商品）
                if (obj && Object.keys(obj).indexOf(String(this.type)) >= 0 ){
                    // 判断song_id这个key是否存在
                    if (Object.keys(obj[this.type]).indexOf(String(this.song_id)) >= 0){
                        obj[this.type][this.song_id] += this.num;
                    } else {
                        obj[this.type][this.song_id] = this.num;
                    }
                } else {
                    obj[this.type] = {};
                    obj[this.type][this.song_id] = this.num;
                }
                storage.setItem('pords', JSON.stringify(obj)); */
                this.isShow = true;
             },
             afterEnter(){
                 this.isShow = false;
             }
        },
        created() {
            /* this.type = this.$route.query.type;
            this.song_id = this.$route.query.song_id;
            this.$axios.get("http://api.apiopen.top/musicRankingsDetails?type="+this.type).then(res=>{
                res.data.result.forEach(item => {
                    if (this.song_id === item.song_id){
                        this.songDetail = item;
                        // 将类别挂载到songDetail对象上，方便存储localStorage
                        this.$set(this.songDetail,'type', this.type)
                        return;
                    }
                });
            }).catch(err=>{
                console.log(err)
            }) */

            this.type = this.$route.query.type;
            this.song_id = this.$route.query.song_id;
            this.$http.jsonp('https://query.yahooapis.com/v1/public/yql',{
                params: {
                    q: "select * from json where url=\"http://api.apiopen.top/musicRankingsDetails?type="+this.type+"\" ",
                    format: "json"
                }
            }).then(res=>{
                res.body.query.results.json.result.forEach(item => {
                    if (this.song_id === item.song_id){
                        this.songDetail = item;
                        // 将类别挂载到songDetail对象上，方便存储localStorage
                        this.$set(this.songDetail,'type', this.type)
                        return;
                    }
                });
            },response => { console.log("发送失败"+response.status)});
        },
    }
</script>

<style scoped >
    
    .pic, .audition, .price, .info {
        width: 96%;
        margin: 2px auto;
        border: 1px solid gainsboro;
        border-radius: 8px;
        background: white;
        padding: 10px;
        font-size: 14px;
        color: gray;

    }
    .wrap {
        border: 1px solid gainsboro;
        border-radius: 16px;
        text-align: center;
    }
    h3 {
        width: 98%;
        border-bottom: 1px solid black;
        color: blue;
        padding-bottom: 4px;
    }
    .buyNum {
        display: inline-block;
        margin-top: 10px;
    }
    .buyNum input{
        width: 30px;
        height: 24px;
        font-size: 20px;
        padding-top: 0px;
        padding-left: 8px;
        
    }
    .btn {
        margin-top: 10px;
        margin-right: 6px; 
    }
    .price span {
        margin: 0 50px 40px 0;
    }
    .danger {
        position: relative;
        overflow: visible;
    }
    .ball {
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background: red;
        position: absolute;
        top: 0px;
        left: 50%;
    }
    .ball-enter-active{
    animation: bounce-in .5s;
    }

    @keyframes bounce-in {
        0% {
            /*x,y,z轴的位置*/
            transform: translate3d(0, 0, 0);
        }
        10% {
            transform: translate3d(25px, -10px, 0);
        }
        20% {
            transform: translate3d(50px, -30px, 0);
        }
        30% {
            transform: translate3d(75px, -45px, 0);
        }
        40% {
            transform: translate3d(100px, -50px, 0);
        }
        50% {
            transform: translate3d(120px, -30px, 0);
        }
        60% {
            transform: translate3d(135px, -15px, 0);
        }
        70% {
            transform: translate3d(150px, 5px, 0);
        }
        80% {
            transform: translate3d(160px, 10px, 0);
        }
        100% {
            transform: translate3d(20px, 280px, 0);
        }
    }
</style>
