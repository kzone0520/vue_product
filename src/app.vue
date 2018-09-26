<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        created() {
            this.$axios.get('http://api.apiopen.top/searchAuthors?name=%E6%9D%9C%E7%94%AB')
            .then(res => {
                console.log(res);
            })
            .then(err => {
                console.log(err);
            })
        },
    }
</script>
<style scoped>
    
</style>