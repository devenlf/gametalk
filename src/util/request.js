/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
import Cookies from "js-cookie";
import { Message } from "element-ui";
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 50000 // 请求超时时间
})

//http请求拦截器
service.interceptors.request.use(config => {
  if (Cookies.get('token')) {
    config.headers = {
      token: Cookies.get('token')
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})


//http响应拦截器
service.interceptors.response.use(data => {// 响应成功关闭loading
  return data
}, error => {
  Message.error(error.response.data)
  Cookies.remove('nickName');
  Cookies.remove('level');   
  Cookies.remove('token');
  this.$router.push({ path: "/login" });
  return Promise.reject(error)
})

export default service