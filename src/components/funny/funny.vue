<template>
    <div class="tmpl">
        <div class="fun-head">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack"></a>
            <router-link :to="{name: 'funny_random'}" >推荐</router-link>
            <router-link :to="{name: 'funny_word'}">段子</router-link>
            <router-link :to="{name: 'funny_pic'}" >图片</router-link>
            <router-link :to="{name: 'funny_video'}" >视频/动图</router-link>
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
        font-size: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .router-link-exact-active.mui-active {
        color: #0094ff;
    }
    a {
        color: black;
    }
</style>
