
const state={
	depts:[
		{
			id:1,
			name:'研发部'
		}
	]
};

const getters={
	getDepts(state){
		return state.depts;	
	}
}

const actions={
	addDept(){
		console.log('actions:addDept');
	},
	delDept(){

	}
};


const mutations={
	addDept(){
		console.log('mutations:addUser');
	},
	delDept(){

	}
};

export default{
	state,
	getters,
	actions,
	mutations
}