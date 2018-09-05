import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/login'
import register from '@/views/register/index'
import home from '@/views/home/home'
import childRouter from './children-list'
import childrenAdmin from './children-admin'
import admin from '@/views/admin/index'




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
    },
    {
      path: '/admin',
      redirect: '/admin/gamefabu',
      component: admin,
      children: childrenAdmin
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})

export default router

