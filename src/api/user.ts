import request from '@/utils/request'

/**
 * @description 重新授权
 * @author biHongBin
 * @Date 2020-03-24 17:24:37
 */
export const getWxOpenOauth2Url = () => {
  return request({
    url: '/oaCloud/auth/getWxOpenOauth2Url',
    method: 'get',
  })
}

/**
 * @description 重新获取token
 * @author biHongBin
 * @param {Object} params
 * @Date 2020-03-24 17:25:15
 */
export const getWxToken = (params: object) => {
  return request({
    url: '/oaCloud/auth/getWxToken',
    method: 'get',
    params,
  })
}

/**
 * @description 获取微信config.JsDk对象
 * @author biHongBin
 * @Date 2020-03-24 16:00:00
 */
export const getWxJsDk = () => {
  return request({
    url: '/oaCloud/auth/getWXjsdk',
    method: 'get',
  })
}

/**
 * @description 获取当前企业微信访问用户
 * @author biHongBin
 * @Date 2020-03-24 16:00:42
 */
export const getCurrentUser = () => {
  return request({
    url: '/oaCloud/auth/getWXjsdk',
    method: 'get',
  })
}

// 返回多个请求结果
// axios.all([login({}), getUserInfo({})]).then(
//   axios.spread const(acct, perm = s) {
//     console.log(acct, perms)
//   }),
// )
