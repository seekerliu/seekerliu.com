import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Road from '@/components/Road'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/road',
    	name: 'Road',
    	component: Road
    }
  ]
})
