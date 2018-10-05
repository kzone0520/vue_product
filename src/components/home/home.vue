<template>
    <div class="tmpl">

        <!-- 轮播图 -->
        <mt-swipe >
            <mt-swipe-item :auto="4000" v-for="(music, index) in musicList" :key="index">
                <router-link :to="{name: 'musicDetail', query: {type: typeRandom, song_id: music.song_id}}">
                    <img :src="music.album_500_500"  :alt="music.title">
                </router-link>
            </mt-swipe-item>
            
        </mt-swipe>

        <!-- 九宫格 -->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 "><router-link :to="{name:'news'}">
                        <span class="mui-icon news-icon rotate"></span>
                        <div class="mui-media-body">新闻资讯</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name: 'picture'}">
                        <span class="mui-icon picture-icon rotate"></span>
                        <div class="mui-media-body">图片分享</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:'music'}">
                        <span class="mui-icon music-icon rotate"></span>
                        <div class="mui-media-body">音乐商城</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name: 'weather'}">
                        <span class="mui-icon weather-icon rotate"></span>
                        <div class="mui-media-body">天气查询</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name: 'funny_word'}">
                        <span class="mui-icon duanzi-icon rotate"></span>
                        <div class="mui-media-body">搞笑段子</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name: 'chat'}">
                        <span class="mui-icon chat-icon rotate"></span>
                        <div class="mui-media-body">AI聊天室</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:'contact'}">
                        <span class="mui-icon phone-icon rotate"></span>
                        <div class="mui-media-body">联系我们</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a @click="tip">
                        <span class="mui-icon set-icon rotate"></span>
                        <div class="mui-media-body">设置</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a @click="tip">
                        <span class="mui-icon mui-icon-more"></span>
                        <div class="mui-media-body">more</div></a></li>
            </ul> 
		</div> 
    </div>
</template>
<script>
    export default {
        data(){
            return {
                typeList: [1,2,11,20,21,22,23,24,25,106],
                typeRandom: '',
                musicList: [],
            }
        },
        methods: {
            tip(){
                this.$toast({
                    message: '暂未上线，敬请期待',
                    position: 'middle',
                    duration: 1000
                });
            },
            getJsonp(url, data){
                this.$http.jsonp('https://query.yahooapis.com/v1/public/yql',{
                    params: {
                        q: "select * from json where url=\""+url+"\" ",
                        format: "json"
                    }
                }).then(res=>{
                    this.musicList = res.body.query.results.json.result;
                },response => { console.log("发送失败"+response.status)});
            }
        },
        created() {
             this.typeRandom = this.typeList[Math.floor(Math.random()*10)];
            // this.$axios.get("http://api.apiopen.top/musicRankingsDetails?type="+this.typeRandom).then(res=>{
            //     this.musicList = res.data.result;
            // }).catch(err=>{
            //     console.log(err)
            // })
            let url = "http://api.apiopen.top/musicRankingsDetails?type="+this.typeRandom;
            this.getJsonp(url);
        },
        watch: {
            desc: function(val, oldVal){
                if (val && !oldVal){
                    this.isShow = true;
                }
            }
        },
    }
</script>
<style scoped>
    .mint-swipe {
        max-height: 187px;
    }
    .mint-swipe img {
        width: 100%;
        height: 100%;
    }
    .mui-table-view.mui-grid-view.mui-grid-9 {
        margin-top: 0;
        background: white;
    }
    .mui-table-view.mui-grid-view.mui-grid-9 li {
        border: none;
    }
    .mui-icon {
        height: 50px;
        width: 50px;
    }
    
    .news-icon {
        background: url('../../static/img/news.png') no-repeat;
    }
    .set-icon {
        background: url('../../static/img/set.png') no-repeat;
    }
    .picture-icon {
        background: url('../../static/img/picture.png') no-repeat;
    }
    .weather-icon {
        background: url('../../static/img/weather.png') no-repeat;
    }
    .music-icon {
        background: url('../../static/img/music.png') no-repeat;
    }
    .duanzi-icon {
        background: url('../../static/img/duanzi.png') no-repeat;
    }
    .phone-icon {
        background: url('../../static/img/phone.png') no-repeat;
    }
    .chat-icon {
        background: url('../../static/img/chat.png') no-repeat;
    }
    .mui-content {
        height: calc( 100% - 277px);
        background: white;
        overflow: scroll;
    }
    .mui-table-view.mui-grid-view.mui-grid-9 {
        padding-top: 20px;
    }
    .rotate {
        transition: transform .3s;

    }
    .rotate:hover {
        transform: rotate(360deg);
    }

  
</style>