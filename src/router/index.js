import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/login'
import home from '@/views/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //重定向
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
