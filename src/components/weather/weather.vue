<template class="tmpl">
    <div >
        <nav-bar :title="title"></nav-bar>
        <!-- 搜索 -->
        <div class="mint-searchbar">
            <div class="mint-searchbar-inner">
                <i class="mintui mintui-search"></i>
                <input class="mint-searchbar-core inp" type="text" v-model="city" placeholder="城市" @keydown="enter($event)">
            </div>
        </div>
        <mt-button class="btn" type='primary' @click="search(city)">搜索</mt-button>
        <!-- 匹配class来设置背景样式 -->
        <div v-if="result?true:false" class="bg-img" :class="{'晴':'qing','暴雨':'yu','大雨':'yu','小雨':'yu',
        '多云':'duoyun'}[result.forecast[0].type]">
            <div class="main">
                <p class="city">{{result.city}}</p>
                <p class="type">{{result.forecast[0].type}}</p>
                <p class="wendu">{{result.wendu}}&deg;</p>
            </div>
            <div class="info">
                <span>{{month+'月'}}{{result.forecast[0].date}}&nbsp;&nbsp;今天</span> 
                <span style="float:right">{{result.forecast[0].high}}	&nbsp; {{result.forecast[0].low}}</span>
                <div class="tip">
                    <span>风向：{{result.forecast[0].fengxiang}}</span><span>风力：{{/(.{9})(.*)(\]{2})/.exec(result.forecast[0].fengli)[2]}}</span><br>
                    <span>{{result.ganmao}}</span>
                </div>
            </div>
            <ul class="ortherday">
                <li v-for="(wea, index) in result.forecast.slice(1)" :key="index">
                    <span>{{month+'月'}}{{wea.date}}</span><span>{{wea.type}}</span><span>{{wea.high}}&nbsp;{{wea.low}}</span>
                </li>
            </ul>
        </div>
        <p class="msg" v-if="msg?true:false">{{msg}}</p>
    </div> 
</template>

<script >
    export default {
        data() {
            return {
                title: '天气查询',
                city: '',
                result: '',
                msg: '',
                month: '',
                tianqi: 'moren',
            }
        },
        methods: {
            search(city){
                if (!city) return;
                this.$axios.get('https://www.apiopen.top/weatherApi?city='+city).then(res=>{
                    if (res.data.code === 200){
                        this.result = res.data.data;
                    } else if (res.data.code === 201){
                        this.result = '';
                        this.msg = res.data.msg;
                    }
                }).catch(err=>{
                    console.log(err);
                });
            },
            enter(e){
                let keynum = window.event?e.keyCode:e.which;
                console.log(keynum)
                switch(keynum){
                    case 13:
                        this.search(this.city);
                        break;
                    case 27:
                        this.city = '';
                        break;
                }
            }
        },
        created(){
            this.search('kkk');
            this.month = new Date();
            this.month = this.month.getMonth() + 1;
        }
    }
</script>

<style scoped >
    
    .mint-searchbar-core {
        background: white;
        height: 28px;
        margin-top: 14px;
        border: none;
        
    }
    
    .mint-searchbar {
        display: inline-block;
        width: 84%;
        border-radius: 6px;
    }
    .btn {
        display: inline-block;
        width: 14%;
    }

    .main {
        text-align: center;
        padding-top: 50px;
         
    }
    .main p{
        color: white;
    } 
    .city {
        font-size: 22px;
        margin-bottom: 0px;
        
    }
    .wendu {
        font-size: 48px;
        margin-top: 14px;
        margin-left: 6%;
    }
    .info {
        width: 96%;
        height: 80px;
        margin: 0 auto;
        margin-top: 30px;
        font-size: 14px;
    }
    .tip {
        box-sizing: border-box;
        margin-top: 6px;
        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
        padding:6px;
    }
    .tip span:nth-child(2) {
        float:right;
    }
    .ortherday {
        width: 96%;
        text-align: center;
        margin: 36px auto;
        font-size: 14px;
    }
    .ortherday li {
        margin-bottom: 16px;
    }
    .ortherday span:nth-child(1) {
        float: left;
    }
    .ortherday span:nth-child(3) {
        float: right;
    }
    .bg-img {
        position: absolute;
        width: 100%;
        height: 80%;
        color: white;
        background: url('../../static/img/moren.jpg') no-repeat;
    }
    .bg-img.qing {
        background: url('../../static/img/qing.jpg') no-repeat;
    }
    .bg-img.yu {
        background: url('../../static/img/yu2.jpg') no-repeat;
    }
    .bg-img.duoyun {
        background: url('../../static/img/duoyun.jpg') no-repeat;
    }
    .msg {
        font-size: 20px;
        color: black;
        margin: 10px 0 0 10px;
    }
</style>
