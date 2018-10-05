<template>
    <div>
        <div class="wrap"  ref="abc">
            <ul>
                <li v-for="(info, index) in talkArr" class="clear" :key="index" >
                    <!-- 头像 -->
                    <div :class="info.identity " ></div>
                    <!-- 时间和内容 -->
                    <div :class="info.type">
                        <span>{{info.time | convertData('YYYY-MM-DD HH:mm:ss')}}</span><br>
                        <p>{{info.msg}}</p>
                    </div>
                </li>
                <!-- 等待回复 -->
                <img v-if="wait" class="wait" src="../../static/img/loadding1.gif" height="30">
            </ul>
        </div>
        <!-- 输入框 -->
        <div class="inp">
            <input type="text" v-model="question" @keydown="send($event)">
            <mt-button class="btn" type="primary" @click="getAns">发送</mt-button>
        </div>
    </div>
</template>

<script >
    export default {
        data() {
            return {
                question: "",
                answer: '',
                talkArr: '',
                wait: false,
            }
        },
        created(){
            var storage = localStorage;
            this.talkArr = JSON.parse(storage.getItem("talk")) ? JSON.parse(storage.getItem("talk")): [] ;
            // 这里设置个定时器是为了先让数据加载到页面，然后在改变滚动条。否则，文字框会下沉一部分。
            setTimeout(()=>{
                this.$refs.abc.scrollTop = this.$refs.abc.scrollHeight;
            },0)
        },
        methods: {
            send(e){
                if (!this.question) return;
                let keynum = window.e?e.keyCode: e.which;
                switch(keynum){
                    case 13:
                        this.getAns();
                        break;
                    case 27:
                        this.question = '';
                        break;
                }
            },
            getAns(){
                if (!this.question) return;
                this.talkArr.push({
                    'type': 'Q',
                    'msg': this.question,
                    'time': new Date(),
                    'identity': 'human',
                });
                this.wait = true;
                // 这里设置个定时器是为了先让数据加载到页面，然后在改变滚动条。否则，文字框会下沉一部分。
                setTimeout(()=>{
                    this.$refs.abc.scrollTop = this.$refs.abc.scrollHeight;
                },200)

                console.log('正在获取回答...')
                this.$http.jsonp('https://query.yahooapis.com/v1/public/yql',{
                    params: {
                        q: "select * from json where url=\"http://api.qingyunke.com/api.php?key=free&appid=0&msg="+this.question+"\"",
                        format: "json"
                    }
                }).then(res=>{
                    // 获取响应后，判断内容，追加数组，取消等待图标，滚轮下滚，添加数组到localStroage
                    if(!res.body.query.results){
                        this.$toast({
                            message: 'api不稳定，请您重新输入',
                            position: 'middle',
                            duration: 2000
                        });
                    }
                    this.answer = res.body.query.results.json.content
                    this.talkArr.push({
                        'type': 'A',
                        'msg': this.answer,
                        'time': new Date(),
                        'identity': 'AI',
                    });
                    this.wait = false;
                    setTimeout(()=>{
                        this.$refs.abc.scrollTop = this.$refs.abc.scrollHeight;
                    },0)
                    var storage = localStorage;
                    storage.setItem('talk',JSON.stringify(this.talkArr));
                    console.log('回答完毕！！')
                },response => { 
                    console.log("发送失败"+response.status)
                });
                this.question = "";
            },
        },
        
    }
</script>

<style scoped >
    p {
        font-size: 16px;
        line-height: 30px;
        color: black;
    }
    .Q {
        text-align: right;
        padding-right: 50px;

    }
    .Q p {
        float: right;
        background: rgb(146, 228, 146);
        padding: 0 20px;
        border-radius: 16px;
    }
    .A {
        text-align: left;
        padding-left: 50px;
    }
    .A p {
        float: left;
        background: rgb(248, 248, 17);
        padding: 0 20px;
        border-radius: 16px;
    }
    ul>li span {
        font-size: 10px;
        color: gray;
    }
    .inp {
        box-sizing: border-box;
        position: fixed;
        bottom: 50px;
        left: 0;
        display: flex;
        width: 100%;
        height: 40px;
    }
    input{
        margin: 0;
        height: 41px;
    }
    .wrap {
        height: calc( 100% - 130px);
        overflow-y: scroll;
        background: white;
        margin-bottom: 90px;
    }
    .clear::after {
        content: '';
        display: block;
        clear: both;
    }
    .wait {
        height: 50px;
        border: none;
        margin-left: 20px;
    }
    li {
        position: relative;
    }
    .human, .AI {
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50%;
    }
    .human {
        background: url('../../static/img/human.jpg') no-repeat;
        position: absolute;
        right: 6px;
        top: 8px;
    }
    .AI {
        background: url('../../static/img/dog.jpg') no-repeat;
        position: absolute;
        left: 6px;
        top: 8px;
    }
</style>
