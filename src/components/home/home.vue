<template>
    <div>
        名字：<span v-text="name"></span><br/>
        详细介绍： <span v-text="desc"></span>
        <mt-button type="danger" size="large">danger</mt-button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                name: '',
                desc: '',
            }
        },
        created() {
            this.$axios.get('http://api.apiopen.top/searchAuthors?name=%E6%9D%9C%E7%94%AB')
            .then(res => {
                this.name = res.data.result[0].name;
                this.desc = res.data.result[0].desc;
            })
            .catch(err => {
                console.log(err);
            })
        },
    }
</script>
<style scoped>
    
</style>