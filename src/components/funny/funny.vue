<template>
    <div class="tmpl">
        <div class="fun-head">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack"></a>
            <router-link :to="{name: 'funny_random'}" >推荐</router-link>
            <router-link :to="{name: 'funny_pic'}" >图片</router-link>
            <router-link :to="{name: 'funny_word'}" >文字</router-link>
            <router-link :to="{name: 'funny_video'}" >视频</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script >
    export default {
        data() {
            return {

            }
        },
        methods: {
            goBack(){
                this.$router.go(-1);
            }
        },
    }
</script>

<style scoped >
    .fun-head {
        width: 100%;
        height: 60px;
        background: hotpink;
        font-size: 24px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: black;
    }
    
</style>
