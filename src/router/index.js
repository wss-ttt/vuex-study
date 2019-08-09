import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import page from '@/views/page.vue'
import page2 from '@/views/page2.vue'
import page3 from '@/views/page3.vue'
import page4 from '@/views/page4.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/page',
    	name:'page',
    	component:page
    },
    {
    	path:'/page2',
    	name:'page2',
    	component:page2
    },
    {
    	path:'/page3',
    	name:'page3',
    	component:page3
    },
    {
    	path:'/page4',
    	name:'page4',
    	component:page4
    },
  ]
})
