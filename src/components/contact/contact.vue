<template>
    <div >
        <nav-bar :title="title"></nav-bar>
        <h4>联系方式：</h4>
        <pre class='msg' v-html="msg"></pre>
    </div>
</template>

<script >
    export default {
        data() {
            return {
                title: 'WeChat',
                msg: '',
                code : `let arr = [8, 2, 1, 0, 5, 6],
    index = [
        2, 0, 5, 2, 3, 2, 1, 3, 4, 1, 3
    ],
    tel = '';
index.forEach(element => {
    tel += arr[element]
})
console.log('WeChat：' + tel);`,
                n: 0,
            }
        },
        methods: {
            loop(){
                if (this.n<= this.code.length-1){
                    this.msg += this.code.slice(this.n,this.n+1)
                    setTimeout(() => {
                        
                            this.n++;
                        
                        this.loop();
                    }, 80);
                }
                return ;
            }
        },
        created(){
            this.loop()
        }
    }
</script>

<style scoped >
    h4 {
        margin: 30px 0 0 6px; 
    }
    .msg {
        width: 98%;
        margin: 16px auto;
        font-size: 16px;
    }
</style>
