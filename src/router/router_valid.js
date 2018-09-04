import router from '../router';
import cookie from "js-cookie";
import store from '@/store';


// 需要过滤的路由
const colation = [
  '/login', '/register'
]

router.beforeEach((to, from, next) => {
  let isLogin = cookie.get('token')
  if (colation.indexOf(to.path) !== -1) {
    store.commit('welcomeChange',false) 
    next();
  } else {
    if (!isLogin) {
      next('/login')
    } else {
      store.commit('welcomeChange',true) 
      store.commit('welcomeName',cookie.get('nickName')) 
      next()
    }
  }
})

