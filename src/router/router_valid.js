import router from '../router';
import cookie from "js-cookie";

router.beforeEach((to, from, next) => {
  let isLogin = cookie.get('userInfo')
  if (to.path === '/login') {
    next();
  } else {
    console.log(isLogin)
    if (isLogin) {
      next('/login')
    }
  }
})

