<template>
  <div>
  	<button @click="add">添加数据</button>
    <button @click="insertUser">添加员工</button> 
    <button @click="insertDept">添加部门</button> 
  </div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: 'page',
  data() {
    return {
      id:2,
    }
  },
  computed:{
  	...mapState(['aa','bb']),
  	...mapGetters(['getUsers','getDepts']),
  },
  methods:{
  	...mapActions(['addUser','addDept']),
  	add(){
  		console.log(this.$store);  // 注意查看这里面输出的是什么东西
  		console.log(this.$store.state.aa.users);
  		console.log(this.$store.state.bb.depts);
  		console.log(this.aa);
  		console.log(this.bb);
  		console.log(this.$store.state.aa===this.aa);
  		console.log(this.getUsers);
  		console.log(this.getDepts);
  		this.addUser();  // 执行方法
  		this.addDept();  // 执行方法
  		// 注意: dispatch和commit的区别
  		this.$store.dispatch('addUser');  
  		this.$store.dispatch('addDept');
  		this.$store.commit('addUser');
  		this.$store.commit('addDept');
  	},
    // 添加员工
    insertUser(){
      console.log('insertUser');
      this.addUser({
        id:2,
        name:'小龙女',
        age:28
      });
    },
    insertDept(){
      console.log('insertDept');
      this.addDept({
        id:this.id++,
        name:'市场部'
      });
    }
  }
}

</script>
<style scoped>
</style>
