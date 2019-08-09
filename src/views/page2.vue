<template>
	<div class="test">
		{{msg}}
		
		<hr />
		{{name}}
	</div>
</template>

<script>
	import store from '@/store/index.js'
	export default{
		name:'',
		data(){
			return{
				msg:store.state.common.msg,
				name:store.getters['common/name']
			}
		},
		mounted(){
			console.log(store)
			console.log(store.getters)
			console.log(store.getters['common/name'])
		}
	}
</script>

<style>
</style>