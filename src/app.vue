<template>
    <div>
        <mt-header title="小麻雀助手"></mt-header>
        <router-view></router-view>
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" :to="{name:'home'}">
				<span class="mui-icon icon-shouye"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'vip'}">
				<span class="mui-icon icon-huiyuan"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'shopcart'}">
				<span class="mui-icon icon-gouwuche2"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'music'}">
				<span class="mui-icon icon-yinle"></span>
				<span class="mui-tab-label">音乐</span>
			</router-link>
		</nav>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods: {

        }
        
    }
</script>
<style scoped>
    
</style>