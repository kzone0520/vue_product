<template>
    <div>

        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item ><img src="../../static/img/pubu.jpg"  alt="1"></mt-swipe-item>
            <mt-swipe-item><img src="../../static/img/dahai.jpg"  alt="2"></mt-swipe-item>
            <mt-swipe-item><img src="../../static/img/luori.jpg"  alt="3"></mt-swipe-item>
        </mt-swipe>

        
        <!-- 九宫格 -->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:'news'}">
                        <span class="mui-icon news_icon"></span>
                        <div class="mui-media-body">新闻资讯</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name: 'picture'}">
                        <span class="mui-icon picture_icon"></span>
                        <div class="mui-media-body">图片分享</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon shi_icon"></span>
                        <div class="mui-media-body">商品展示</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name: 'chat'}">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">聊天</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name: 'weather'}">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">天气查询</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:'music'}">
                        <span class="mui-icon mui-icon-gear"></span>
                        <div class="mui-media-body">音乐商城</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name: 'funny_word'}">
                        <span class="mui-icon mui-icon-info"></span>
                        <div class="mui-media-body">搞笑段子</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-more"></span>
                        <div class="mui-media-body">more</div></a></li>
            </ul> 
		</div> 

        <!-- <input type="text" v-model="searchVal">
        <button @click="search" >搜索</button><br/>
        名字：<span v-text="name"></span><br/>
        详细介绍： <span v-text="desc"></span>
        <input type="button" v-show="isShow" value="查看更多" @click="getMore" />
        <mt-button type="danger" size="large">danger</mt-button> -->
    </div>
</template>
<script>
    export default {
        data(){
            return {
                
                searchVal: '',
                name: '',
                desc: '',
                moreDesc: '',
                isShow: false,
            }
        },
        methods: {
            search(){
                this.$axios.get('http://api.apiopen.top/searchAuthors?name=' + this.searchVal)
                .then(res => {
                    this.name = res.data.result[0].name;
                    this.desc = res.data.result[0].desc.slice(0, 250) + '...';
                    this.moreDesc = res.data.result[0].desc;
                })
                .catch(err => {
                    this.name = "无此人搜索结果，请重新输入";
                    this.desc = '';
                });
                this.searchVal = '';
            },
            getMore(){
                this.desc = this.moreDesc;
                this.isShow = false;
            }
        },
        created() {
            
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
    .news_icon {
        background: url('../../static/img/news.png') no-repeat;
    }
    .shi_icon {
        background: url('../../static/img/shi.png') no-repeat;
    }
    .picture_icon {
        background: url('../../static/img/picture.png') no-repeat;
    }
</style>