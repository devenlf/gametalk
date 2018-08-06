import server from '@/util/request';

export function loginFunc(username,password) {
  return server({
    url: '/users/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: 'username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password) + ''
  })
}