import server from '@/util/request';

//登录
export function loginFunc(username, password) {
  return server({
    url: '/users/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: 'username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password) + ''
  })
}


//注册
export function register(data) {
  return server({
    url: '/users/register',
    method: 'post',
    data: data
  })
}

