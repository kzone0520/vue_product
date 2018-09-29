<template>
    <div class="tmpl">
        <ul>
            <li v-for="(item, index) in picList" :key="index" >
                <div class="header" >
                    <img class="img" :src="item.header" alt="toux">
                    <span class="uname" v-text="item.username"></span>
                    <span class="ctime" v-text="item.passtime"></span>
                </div>
                <h4>{{item.text}}</h4>
                <img class="pic" v-lazy="item.image">
                <hr>
            </li>
        </ul>
        <page-vue></page-vue>
    </div>
</template>

<script >
    import VueBus from '../common/vueBus.js';
    export default {
        data() {
            return {
                picList: [],
                page: 1,
            }
        },
        methods: {
            getPic(page){
                this.$axios.get("https://www.apiopen.top/satinGodApi?type=3&page="+page).then(res=>{
                    this.picList = res.data.data;
                }).catch(err=>{
                    console.log(err);
                })
            }
        },
        created(){
            this.getPic(this.page);
        },
        mounted(){
            const that = this;
            VueBus.$on('changepage', function(pagenum){
                that.page = pagenum;
            })
        },
        watch: {
            page: function(){
                this.getPic(this.page);
            }
        }
    }
</script>

<style scoped >
    .header {
        height: 70px;
        position: relative;
    }
    .img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-left: 10px;
        margin-top: 10px;
    }
    .uname {
        position: absolute;
        top: 14px;
        left: 70px;
        font-size: 16px;
        color: #0094ff;
    }
    .ctime {
        position: absolute;
        top: 36px;
        left: 70px;
        font-size: 12px;
    }
    .pic {
        width: 100%;
    }
    h4 {
        margin-left: 10px;
        width: 96%;
    }
    
</style>
