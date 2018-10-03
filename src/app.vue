<template>
    <div  >
        <mt-header title="小麻雀助手"></mt-header>
		<transition name="zoom" mode="out-in" >
        	<router-view style="animation-duration: 0.3s"></router-view>
		</transition>
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" :to="{name:'home'}">
				<span class="mui-icon icon-shouye"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			
			<router-link class="mui-tab-item" :to="{name:'shopcart'}">
				<span class="mui-icon icon-gouwuche2"><span class="mui-badge">{{picknum}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'vip'}">
				<span class="mui-icon icon-huiyuan"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
		</nav>
    </div>
</template>
<script>
	import VueBus from './components/common/vueBus.js';
    export default {
        data(){
            return {
				picknum: 0,
            }
        },
        methods: {

		},
		mounted(){
			VueBus.$on('changenum', num=>{
				this.picknum += num;
			});
			// 将localStorage里购物车的数据取出并计算件数
			let storage = window.localStorage;
			if (storage.getItem('pords')){
				let obj = JSON.parse(storage.getItem('pords'));
				Object.values(obj).forEach(ele=>{
					this.picknum += parseInt(Object.values(ele));
				})
			}
		}
        
    }
</script>
<style scoped>

</style>