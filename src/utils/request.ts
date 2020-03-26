import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { Toast } from 'antd-mobile'
import { getWxOpenOauth2Url } from '@/api/user'
import { loadFromLocal } from '@/utils'

interface ResponseData<T> {
  code: number
  data: T
  message: string
}

axios.defaults.headers = {
  'Content-Type': 'application/json;charset=utf-8',
}
axios.defaults.baseURL = process.env.REACT_APP_API_URL

/**
 * @description 请求拦截器
 * @author biHongBin
 * @Date 2020-02-21 17:50:06
 */
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token: string = loadFromLocal('h5', 'wxToken')
    if (token) {
      config.headers.token = token
    }
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
axios.interceptors.response.use(
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
        console.log('token失效重新获取')
        return Promise.reject(new Error(message))
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

/**
 * @description 统一发起请求的函数
 * @author biHongBin
 * @Date 2020-03-26 15:12:03
 */
export default function request<T>(options: AxiosRequestConfig) {
  return axios.request<T>(options)
}
