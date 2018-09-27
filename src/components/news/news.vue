<template>
    <div class="tmpl" style="height: 557px">
        <nav-bar :title="title"></nav-bar>
        <mt-loadmore class="tmpl" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="isAutoFill" >
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media" v-for="(news, index) in newsList" :key="index">
                    <a :href="news.link">
                        <img class="mui-media-object mui-pull-left" :src="news.picInfo[0]?news.picInfo[0].url:'/'">
                        <div class="mui-media-body">
                            {{news.title}}
                            <br/><span style="float: left">点击次数：{{news.tcount}}</span><span style="float: right">{{news.ptime}}</span>
                        </div>
                    </a>
                </li>
            </ul>
        </mt-loadmore>
    </div>
</template>

<script >
    export default {
        data() {
            return {
                title: '新闻列表',
                newsList: [],
                allLoaded: false,
                isAutoFill: false,
                page: 0,
                moreNewsTitle: [],
            }
        },
        methods: {
            loadBottom(){
                console.log('上拉触发了');
                this.page ++;
                if(this.page === this.moreNewsTitle.length -1){
                    this.allLoaded = true;
                }
                this.showMore();
                this.$refs.loadmore.onBottomLoaded();
            },
            showMore(){
                (this.$axios.get("https://www.apiopen.top/journalismApi").then(res => {
                    this.moreNewsTitle = Object.keys(res.data.data);
                    this.newsList = this.newsList.concat(res.data.data[this.moreNewsTitle[this.page]]);
                    console.log(this.page,this.moreNewsTitle[this.page])
                }).catch(err => {
                    console.log(err)
                }))        
            },

        },
        created(){
            this.showMore();
        }
    }
</script>

<style scoped >
    .mui-media-body span {
        color: #0094ff;
        font-size: 12px;
    }
</style>
