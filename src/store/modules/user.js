
const state={
	users:[
		{
			id:1,
			name:'乔峰',
			age:18
		}
	],  //保存数据的
};

const getters={
	getUsers(state){
		return state.users;	
	}	
}

const actions={
	addUser(){
		console.log('actions:addUser');
	},
	delUser(){

	}
};


const mutations={
	addUser(){
		console.log('mutations:addUser');
	},
	delUser(){

	}
};

export default{
	state,
	getters,
	actions,
	mutations
}