import router from '../router';
import cookie from "js-cookie";
import store from '@/store';

router.beforeEach((to, from, next) => {
  let isLogin = cookie.get('userInfo')
  if (to.path === '/login') {
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

