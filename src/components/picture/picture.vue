<template>
    <!-- <vue-preview :slides="list" @close="handleClose"></vue-preview> -->
    <div class="tmpl">
        <nav-bar :title="title"></nav-bar>
        
        <div class="mui-content-padded">
            <ul class="mui-pagination">
                <li class="mui-previous mui-disabled" @click="pageprev">
                    <a >
                        &laquo;
                    </a>
                </li>
                <li v-for="index in pageList" :key="index" @click="changePage(index)">
                    <a >
                        {{index}}
                    </a>
                </li>
                
                <li class="mui-next" @click="pagenext">
                    <a >
                        &raquo;
                    </a>
                </li>
            </ul>
        </div>
        <ul id="wrap">
            <li v-for="(item, index) in list" :key="index">
                <img :src="item.url?item.url: ''">
            </li>
        </ul>
    </div> 
</template>

<script >
    export default {
        data() {
            return {
                title: "美图分享",
                list: [],
                pageList: [1,2,3,4,5,6,7,8],
                page: 0,
            }
        },
        methods: {
            changePage(index){
                this.page = index;
                this.getPic();
            },
            getPic(){
                this.$axios.get("https://www.apiopen.top/meituApi?page=" + this.page).then(res => {
                    console.log(res.data.data[0].url)
                    this.list = res.data.data;
                    /* this.list.forEach(ele => {
                        ele.w = 400;
                        ele.h = 600;
                        ele.src = ele.url;
                        ele.msrc = ele.url
                    }); */
                }).catch(err=>{
                    console.log(err)
                })
            },
            pageprev(){
                if (this.page > 1){
                    this.page--;
                    this.getPic();
                }
            },
            pagenext(){
                this.page++;
                this.getPic();
            },
             /* handleClose () {
                console.log('close event')
            } */
        },
        created(){
            this.getPic();
        }
    }
</script>

<style scoped >
    ul, li {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
    }
    img {
        width: 100%;
        height: 300px;
        margin: 20px;
    }
    
    .mui-content-padded {
        position: fixed;
        bottom: 40px;
        opacity: 0.5;
    }
    #wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>
