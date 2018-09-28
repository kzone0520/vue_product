<template>
    <div class="tmpl">
        <nav-bar :title="title"></nav-bar>
        
        <div class="mui-content">
			<div class="mui-content-padded">
				<p  v-for="(item, index) in list" :key="index">
					<img v-lazy="item.url" data-preview-src="" data-preview-group="1" :key="item.url"/>
				</p>
				
			</div>
		</div>
        
        <page-vue></page-vue>
    </div> 
</template>

<script >
    import VueBus from '../common/vueBus.js';
    export default {
        data() {
            return {
                title: "图片分享",
                list: [],
                page: 0,
            }
        },
        methods: {
            getPic(page){
                this.$axios.get("https://www.apiopen.top/meituApi?page=" + page).then(res => {
                    console.log(res.data.data[0].url)
                    this.list = res.data.data;
                }).catch(err=>{
                    console.log(err)
                })
            },
            test(){
                console.log('test:', this.page)
            }
        },
       
        created(){
            this.getPic(this.page);
           
        },
        mounted() {
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
     #page {
        position: fixed;
        width: 350px;

        left: 0;
        right: 0;
        margin-left:auto;
        margin-right:auto;
        bottom: 50px;
        opacity: 0.7;
    }
     

    .mui-preview-image.mui-fullscreen {
        position: fixed;
        z-index: 20;
        background-color: #000;
    }
    .mui-preview-header,
    .mui-preview-footer {
        position: absolute;
        width: 100%;
        left: 0;
        z-index: 10;
    }
    .mui-preview-header {
        height: 44px;
        top: 0;
    }
    .mui-preview-footer {
        height: 50px;
        bottom: 0px;
    }
    .mui-preview-header .mui-preview-indicator {
        display: block;
        line-height: 25px;
        color: #fff;
        text-align: center;
        margin: 15px auto 4;
        width: 70px;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 12px;
        font-size: 16px;
    }
    .mui-preview-image {
        display: none;
        -webkit-animation-duration: 0.5s;
        animation-duration: 0.5s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    .mui-preview-image.mui-preview-in {
        -webkit-animation-name: fadeIn;
        animation-name: fadeIn;
    }
    .mui-preview-image.mui-preview-out {
        background: none;
        -webkit-animation-name: fadeOut;
        animation-name: fadeOut;
    }
    .mui-preview-image.mui-preview-out .mui-preview-header,
    .mui-preview-image.mui-preview-out .mui-preview-footer {
        display: none;
    }
    .mui-zoom-scroller {
        position: absolute;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        -webkit-backface-visibility: hidden;
    }
    .mui-zoom {
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }
    .mui-slider .mui-slider-group .mui-slider-item img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }
    .mui-android-4-1 .mui-slider .mui-slider-group .mui-slider-item img {
        width: 100%;
    }
    .mui-android-4-1 .mui-slider.mui-preview-image .mui-slider-group .mui-slider-item {
        display: inline-table;
    }
    .mui-android-4-1 .mui-slider.mui-preview-image .mui-zoom-scroller img {
        display: table-cell;
        vertical-align: middle;
    }
    .mui-preview-loading {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: none;
    }
    .mui-preview-loading.mui-active {
        display: block;
    }
    .mui-preview-loading .mui-spinner-white {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -25px;
        margin-top: -25px;
        height: 50px;
        width: 50px;
    }
    .mui-preview-image img.mui-transitioning {
        -webkit-transition: -webkit-transform 0.5s ease, opacity 0.5s ease;
        transition: transform 0.5s ease, opacity 0.5s ease;
    }
    @-webkit-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @-webkit-keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    p img {
        max-width: 100%;
        height: auto;
    }
    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>
