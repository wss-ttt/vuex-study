<template>
	<div class="test">
		<h2>我是page5页面</h2>
		年龄:{{common.age}}
		<button @click="updateAge">改变年龄</button>
		<button @click="updateAge2">改变年龄</button>
		<hr>
		<button @click="test">测试</button>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import {test} from '@/utils/index.js'
	export default{
		name:'',
		data(){
			return{
				
			}
		},
		computed:{
			...mapState(['common'])
			/*...mapState({
				age:state=>state.common.age
			})*/
		},
		methods:{
			updateAge(){
				this.$store.commit({
					type:'updateAge',
					age:10
				})
			},
			
			updateAge2(){
				this.$store.commit('updateAge2',10)
			},
			test
		}
	}
</script>

<style>
</style>