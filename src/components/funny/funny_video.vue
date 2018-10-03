<template>
    <div class="tmpl">
        <ul >
            <li class="vdo" v-for="(item, index) in dataList" :key="index">
                <div class="header" >
                    <img class="img" :src="item.header" alt="toux">
                    <span class="uname" v-text="item.username"></span>
                    <span class="ctime" v-text="item.passtime"></span>
                </div>
                <h4 class="title" v-text="item.text"></h4>
                <video :src="item.video" v-if="item.type==='video'?true:false" controls="controls" ></video>
                <img v-lazy="item.gif" v-if="item.type==='gif'?true:false" alt="gif">
                <hr>
            </li>
            
        </ul>
        <page-vue></page-vue>
    </div>
</template>

<script >
    import VueBus from '../common/vueBus';
    export default {
        data() {
            return {
                dataList: [],
                page: 1,
            }
        },
        methods: {
            getVideo(page){
                this.$axios.get('https://www.apiopen.top/satinGodApi?type=5&page='+page).then(res => {
                    this.dataList = res.data.data;
                    this.dataList.forEach((ele, index) => {
                        if (ele.video === null){
                            this.dataList.splice(index, 1);
                        }
                    });
                }).catch(err=>{
                    console.log(err)
                });
            }
        },
        created() {
            this.getVideo(this.page);
        },
        mounted(){
            const that = this;
            VueBus.$on('changepage', function(pagenum){
                that.page = pagenum;
            })
        },
        watch: {
            page: function(){
                this.getVideo(this.page);
            }
        }
    }
</script>

<style scoped >
    video {
        width: 100%;
        height: 240px;
    }
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
    .vdo h4 {
        margin-left: 10px;
        width: 96%;
    }


</style>
