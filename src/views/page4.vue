<template>
	<div class="test">
		<h2>我是page4页面</h2>
		{{myNum}}
		<br />
		{{myInfo}}
		<br />
		{{users}}
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
		name:'',
		data(){
			return{
				
			}
		},
		computed:{
			// ...mapGetters(['num'])
			...mapGetters(
				{
					'myNum':'num',
					'myInfo':'info',
					'users':'user/getUsers'
				}
			)
		}
	}
</script>

<style>
</style>