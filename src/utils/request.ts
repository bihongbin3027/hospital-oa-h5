import axios from 'axios'
import { Toast } from 'antd-mobile'
import { loadFromLocal } from '../utils'

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, // 跨域请求时发送Cookie
  timeout: 8000,
})

/**
 * @description 请求拦截器
 * @author biHongBin
 * @Date 2020-02-21 17:50:06
 */
service.interceptors.request.use(
  config => {
    config.headers['token'] = loadFromLocal('h5', 'wxToken')
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    Toast.loading('请稍后', 0)
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

/**
 * @description 响应拦截器
 * @author biHongBin
 * @Date 2020-02-21 17:50:42
 */
service.interceptors.response.use(
  (response: any) => {
    const { code, message } = response.data
    if (code === 1) {
      return response
    } else {
      Toast.info(message, 1.5)
    }
  },
  (error: any) => {
    Toast.hide()
    return Promise.reject(error)
  },
)

export default service
