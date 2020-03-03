import request from '@/utils/request'
import axios from 'axios'

// 登陆
export function login(data: object) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  })
}

// 用户信息
export function getUserInfo(params: object) {
  return request({
    url: '/user/userInfo',
    method: 'get',
    data: params,
  })
}

// 返回多个请求结果
axios.all([login({}), getUserInfo({})]).then(
  axios.spread(function(acct, perms) {
    console.log(acct, perms)
  }),
)
