<template>
	<div class="test">
		<h2>我是page4页面</h2>
		{{num}}
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
			...mapGetters(['num'])
		}
	}
</script>

<style>
</style>