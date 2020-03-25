import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { Toast } from 'antd-mobile'
import { getWxToken, getCurrentUser, getWxOpenOauth2Url } from '@/api/user'
import { loadFromLocal, saveToLocal } from '@/utils'

interface ResponseData<T> {
  code: number
  data: T
  message: string
}

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 8000,
})

/**
 * @description 请求拦截器
 * @author biHongBin
 * @Date 2020-02-21 17:50:06
 */
request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = loadFromLocal('h5', 'wxToken')
    if (token) {
      config.headers.token = token
    }
    config.headers['Content-Type'] = 'application/json;charset=utf-8'
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

/**
 * @description 响应拦截器
 * @author biHongBin
 * @Date 2020-02-21 17:50:42
 */
request.interceptors.response.use(
  (response: AxiosResponse<ResponseData<any>>) => {
    const { code, message } = response.data
    const token = loadFromLocal('h5', 'wxToken')
    const userInfo = loadFromLocal('h5', 'userInfo')
    if (code === 1) {
      // 请求成功
      return response.data as any
    } else if (code === 10001) {
      // token失效重新获取
      if (token && userInfo) {
        getWxToken({
          userId: userInfo.userId,
        }).then((res: any) => {
          saveToLocal('h5', 'wxToken', res)
          getCurrentUser().then((userInfo: any) => {
            // 存储用户信息
            saveToLocal('h5', 'userInfo', userInfo)
            // 刷新页面
            window.location.reload()
          })
        })
      } else {
        // 重新授权
        getWxOpenOauth2Url()
      }
    } else {
      // 请求成功，状态不为成功时
      Toast.info(message, 1.5)
      return Promise.reject(new Error(message))
    }
  },
  (error: AxiosError) => {
    Toast.info(error.message, 1.5)
    return Promise.reject(error)
  },
)

export default request
