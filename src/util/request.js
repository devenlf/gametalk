/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://192.168.13.39:3000/',
  timeout: 50000 // 请求超时时间
})

//http请求拦截器
service.interceptors.request.use(config => {
  
  return config
}, error => {
  return Promise.reject(error)
})


//http响应拦截器
service.interceptors.response.use(data => {// 响应成功关闭loading
  return data
}, error => {
  return Promise.reject(error)
})

export default service