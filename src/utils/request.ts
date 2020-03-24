import axios from 'axios'
import { Toast } from 'antd-mobile'
import { getWxToken, getCurrentUser, getWxOpenOauth2Url } from '@/api/user'
import { loadFromLocal, saveToLocal } from '@/utils'

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
    const token = loadFromLocal('h5', 'wxToken')
    const userInfo = loadFromLocal('h5', 'userInfo')
    if (code === 1) {
      return response
    } else if (code === 10001) {
      // token失效重新获取
      if (token && userInfo) {
        getWxToken({
          userId: userInfo.userId,
        }).then((res: any) => {
          saveToLocal('h5', 'wxToken', res)
          getCurrentUser().then((userData: any) => {
            // 存储用户信息
            saveToLocal('h5', 'userInfo', userData)
            // 刷新页面
            window.location.reload()
          })
        })
      } else {
        console.log('重新授权')
        getWxOpenOauth2Url()
      }
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
