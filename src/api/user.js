import server from '@/util/request';

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



export function register(data) {
  return server({
    url: '/users/register',
    method: 'post',
    data: data
  })
}

