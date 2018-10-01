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
                const params = new URLSearchParams();
                params.append('key', 'free');
                params.append('appid', '0');
                params.append('msg', this.content);


                this.$axios.post("http://api.qingyunke.com/api.php",params,{
                     headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(res=>{
                    this.back += res.data.content;
                }).catch(err=>{
                    console.log(err)
                })
            }
        },
    }
</script>

<style scoped >

</style>
