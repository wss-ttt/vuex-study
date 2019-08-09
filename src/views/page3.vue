<template>
	<div class="test">
		学生信息:
		<br />
		<ul>
			<li v-for="(item,index) in common.students">{{item}}</li>
		</ul>
		<hr />
		<ul>
			<li v-for="(item) in name">{{item}}</li>
		</ul>
		<hr />
		{{num}}
	</div>
</template>
<script>
	import {mapState ,mapGetters} from 'vuex'
	export default{
		name:'',
		data(){
			return{
				name:this.$store.getters['common/name']
			}
		},
		/*computed:mapState({
			common:state=>state.common,
		})*/
		
		/*computed:{
			name(){
				return '我是自己的计算属性'
			},
			...mapState({
				common:state=>state.common,
			})
		}*/
		mounted(){
			console.log(this.common)
			console.log(this.num)
		},
		computed:{
			/*...mapState({
				common:state=>state.common,
			})*/
			// ...mapState(['common','aa','bb'])
			...mapState({
				common:state=>state.common,
				aa:state=>state.aa,
				bb:state=>state.bb
			}),
			...mapGetters(['num'])
		}
	}
</script>

<style>
</style>