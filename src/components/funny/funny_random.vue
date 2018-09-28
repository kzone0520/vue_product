<template>
    <div class="tmpl">
            funny_randomfunn
    </div>
</template>

<script >
    export default {
        data() {
            return {
                dataList: [],
            }
        },
        methods: {

        },
        created() {
            this.$axios.get('https://www.apiopen.top/satinGodApi?type=1&page=0').then(res => {
                
            }).catch(err=>{
                console.log(err)
            })
        },
    }
</script>

<style scoped >

</style>
