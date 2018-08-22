import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/login'
import home from '@/views/home/home'
import childRouter from './children-list'



Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      //重定向
      redirect: '/home'
    },
    {
      path: '/home',
      redirect: '/home/games',
      component: home,
      children: childRouter
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

export default router

