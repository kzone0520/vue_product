<template>
    <div class="tmpl">
        <nav-bar :title="title"></nav-bar>
        <ul>
            <li class="fenlei" v-for="msc in musicList" :key="msc.type">
                <img :src="msc.pic_s210" :alt="msc.name" height="150" width="150">
                <ul class="song">
                    <li  v-for="(music, index) in msc.content" :key="index">
                        <router-link :to="{name: 'musicDetail', query: {type: msc.type, song_id: music.song_id}}">
                            {{index+1}}. {{music.title}} - {{music.author}}
                        </router-link>
                    </li>
                </ul>
                <hr>
            </li>
        </ul>
        
    </div>
</template>

<script >
export default {
    data() {
        return {
            title: "音乐商城",
            musicList: [],
        }
    },
    created() {
        // this.$axios.get('http://api.apiopen.top/musicRankings').then(res=>{
        //     this.musicList = res.data.result;
        // }).catch(err=>{
        //     console.log(err)
        // })

        this.$http.jsonp('https://query.yahooapis.com/v1/public/yql',{
            params: {
                q: "select * from json where url=\"http://api.apiopen.top/musicRankings\" ",
                format: "json"
            }
        }).then(res=>{
            this.musicList = res.body.query.results.json.result;
        },response => { console.log("发送失败"+response.status)});
    },
}
</script>

<style scoped >
    .fenlei{
        width: 100%;
        display: flex;
        margin-top: 10px;
        border-bottom: 1px solid gray;
    }
    .song {
        width: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

    }
    .song li {
        height: 20px;
        overflow: hidden;
        margin-left: 6px;
    }
</style>
