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
                        <input type="button" value="-">
                        <input type="button" disabled="disabled" :value="num">
                        <input type="button" value="+">
                    </div><br>
                    <mt-button class="btn" type="primary">立即购买</mt-button><mt-button class="btn" type="danger">加入购物车</mt-button>
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
    export default {
        data() {
            return {
                title: '歌曲详情',
                type: '',
                song_id: '',
                songList: [],
                songDetail: {},
                num: 1,
            }
        },
        methods: {

        },
        created() {
            this.type = this.$route.query.type;
            this.song_id = this.$route.query.song_id;
            this.$axios.get("http://api.apiopen.top/musicRankingsDetails?type="+this.type).then(res=>{
                this.songList = res.data.result;
                this.songList.forEach(item => {
                    if (this.song_id === item.song_id){
                        this.songDetail = item;
                        return;
                    }
                });
            }).catch(err=>{
                console.log(err)
            })
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
    .pic {
    }
    .wrap {
        border: 1px solid gainsboro;
        border-radius: 16px;
        text-align: center;
    }
    h3 {
        width: 98%;
        height: 30px;
        border-bottom: 1px solid black;
        color: blue;
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
   
</style>
