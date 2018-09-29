<template>
    <div id="pageBar">
        <ul class="mui-pagination" @click="changePage($event)">
            <li class="mui-previous mui-disabled" >
                <a >
                    &laquo;
                </a>
            </li>
            <li v-for="index in pageList" :key="index" class="num">
                <a >
                    {{index}}
                </a>
            </li>
            
            <li  >
                <a >
                    &raquo;
                </a>
            </li>
        </ul>
    </div>
</template>

<script >
    import VueBus from './vueBus.js';
    export default {
        data() {
            return {
                pageList: [1,2,3,4,5,6,7,8],
                page: 1,
            }
        },
        methods: {
            send(){
                VueBus.$emit('changepage',this.page);
            },
            changePage(e){
                const that = this;
                if ( e.target.nodeName === 'A'){
                    if ( e.target.innerText == "«"){
                        if (that.page > 1){
                            that.page--;
                        }
                    } else if ( e.target.innerText ==  "»"){
                        that.page++;
                    } else {
                        that.page = e.target.innerText;
                    }
                    
                }
            }
        },
        watch: {
            page: function(){
                this.send();
            }
        }
    }
</script>

<style scoped >
    #pageBar {
        position: fixed;
        width: 350px;

        left: 0;
        right: 0;
        margin-left:auto;
        margin-right:auto;
        bottom: 50px;
        opacity: 0.7;
    }
</style>
