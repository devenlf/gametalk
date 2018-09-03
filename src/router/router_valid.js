import router from '../router';
import cookie from "js-cookie";
import store from '@/store';


// 需要过滤的路由
const colation = [
  '/login', '/register'
]

router.beforeEach((to, from, next) => {
  let isLogin = cookie.get('userInfo')
  if (colation.indexOf(to.path) !== -1) {
    cookie.remove('userInfo')
    next();
  } else {
    if (!isLogin) {
      next('/login')
    } else {
      next()
    }
  }
  store.dispatch('is_show');
})

