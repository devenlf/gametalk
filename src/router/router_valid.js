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
    store.commit('welcomeChange', false)
    next();
  } else {
    if (!isLogin) {
      next('/login')
    } else {
      store.commit('welcomeChange', true)
      store.commit('welcomeName', cookie.get('nickName'))
      console.log(cookie.get('level'))
      switch (cookie.get('level')) {
        case '0':
          next()
          break;
        case '1':
          if (to.path==='/admin/gamefabu') {
            next()
          }else{
            next('/admin/gamefabu')
          }
          break;
        default:
          next()
          break
      }
    }
  }
})

