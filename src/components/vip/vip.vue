<template>
    <div class="tmpl">
        <nav-bar :title="title"></nav-bar>
        <!-- 用户名 -->
        <div class="block">
            <span>账号：</span>
            <input  type="text" class="uname" placeholder="请输入用户名">
        </div>
        <!-- 密码 -->
        <div class="block">
            <span>密码：</span>
            <input class="psw" type="password" placeholder="请输入用密码">
        </div>
        <!-- 自动登入 -->
        <div class="auto">
            <span>自动登入</span>
            <mt-switch class="switch"></mt-switch>
        </div>
        <mt-button class="btn" type="primary" size="large" @click="login">登录</mt-button>
        <div>
        <div class="opation">
            <span><a href="javascript:;" @click="login">注册账号</a></span>|
            <span><a href="javascript:;" @click="login">忘记密码</a></span>
        </div>
        </div>
    </div>
</template>

<script >
export default {
    data() {
        return {
            title: "会员"
        }
    },
    methods: {
        login(){
            this.$toast({
                    message: '暂不支持会员功能',
                    position: 'middle',
                    duration: 1000
                });
        }
    },
    mounted(){
        this.login();
    }
}
</script>

<style scoped >
    .block {
        height: 50px;
        position: relative;
        background: white;
    }
    .block:nth-child(2) {
        margin-top: 30px;
        border-bottom: 1px solid gray;
    }
    .uname,.psw {
        width: 85%;
        height: 100%;
        position: absolute;
        right: 0;
        background: none;
        border: none;
    }
    span {
        width: 30px;;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        line-height: 50px;
        margin-left: 10px;
        
    }
    
    .auto {
        margin-top: 18px;
        height: 50px;
        background: white;
    }
    .auto .switch {
        float: right;
        margin-right: 10px;
        margin-top: 10px;
    }

    .btn {
        width: 94%;
        height: 50px;
        margin: 30px auto;
    }
    .opation{
        text-align: center;
        margin: 0 auto;
    }

    .clear {zoom:1};
    .clear:after {
        content: '';display: block; clear:both;
    }
</style>
