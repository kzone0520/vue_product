<template>
    <div >
        <input type="text" v-model="content" @keydown="send($event)">
        <p v-text="back"></p>
    </div>
</template>

<script >
    export default {
        data() {
            return {
                content: '',
                back: ''
            }
        },
        methods: {
            send(e){
                let keynum = window.e?e.keyCode: e.which;
                console.log(keynum);
                switch(keynum){
                    case 13:
                        this.getAns();
                        break;
                    case 27:
                        this.content = '';
                        break;
                }
               // this.getAns();
            },
            getAns(){

                var  params = JSON.stringify({
                    "reqType":0,
                    "perception": {
                        "inputText": {
                            "text": "附近的酒店"
                        },
                        "inputImage": {
                            "url": "imageUrl"
                        },
                        "selfInfo": {
                            "location": {
                                "city": "北京",
                                "province": "北京",
                                "street": "信息路"
                            }
                        }
                    },
                    "userInfo": {
                        "apiKey": "a05a941774fc4c5093b83eb4ca4f3bba",
                        "userId": "001"
                    }
                })
                this.$axios.post("http://openapi.tuling123.com/openapi/api/v2", params ,{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
}).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            }
        },
    }
</script>

<style scoped >

</style>
