import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/login'
import home from '@/views/home/home'
import List from '@/views/list/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //重定向
      redirect: '/home/list'
    },
    {
      path: '/home',
      redirect: '/home/list',
      name: 'home',
      component: home,
      children:[
        {path:'list',component:List}
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
