import store from '@/store/index.js'

export const test = ()=>{
    console.log(store.state.common.msg);
}