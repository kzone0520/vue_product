<template>
    <div class="tmpl">
        <nav-bar :title="title"></nav-bar>

       <!--  <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media" v-for="(news, index) in newsList" :key="index">
                <a class="mui-navigate-right">
                    <img class="mui-media-object mui-pull-left" >
                    <div class="mui-media-body">
                        
                        
                    </div>
                </a>
            </li>
           
        </ul> --> 
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(news, index) in newsList" :key="index">
                <a :href="news.link">
                    <img class="mui-media-object mui-pull-left" :src="news.picInfo[0]?news.picInfo[0].url:'/'">
                    <div class="mui-media-body">
                        {{news.title}}
                        <span style="float: left">点击次数：{{news.tcount}}</span><span style="float: right">{{news.ptime}}</span>
                    </div>
                </a>
            </li>
        </ul>


 
    </div>
</template>

<script >
    export default {
        data() {
            return {
                title: '新闻列表',
                newsList: [],
            }
        },
        methods: {

        },
        created(){
            this.$axios.get("https://www.apiopen.top/journalismApi").then(res => {
                console.log(typeof(res.data.data.auto))
                this.newsList = res.data.data.tech.concat(res.data.data.auto);
                

               
            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>

<style scoped >
    .mui-media-body span {
        color: #0094ff;
        font-size: 12px;
    }
</style>
