import React from 'react'
import { parse } from 'query-string'
import { saveToLocal, loadFromLocal } from '@/utils'
import { getWxJsDk, getCurrentUser, getWxOpenOauth2Url } from '@/api/user'
import Loading from '@/components/loading'

interface propsType {
  location: { search: string }
  history: {
    push: (val: { pathname: string; search: string } | string) => void
  }
}

function StartApp(props: propsType) {
  /**
   * @description 初始化用户登陆信息和页面跳转
   * @author biHongBin
   */
  const getInit = () => {
    const { id, wxToken, actionHref } = parse(props.location.search)
    const storeToken = loadFromLocal('h5', 'wxToken')

    /**
     * @description 重新授权
     * @author biHongBin
     * @Date 2020-03-24 17:20:23
     */
    const authorize = () => {
      getWxOpenOauth2Url()
    }

    const getConfig = async () => {
      const { appId, timeStamp, nonceStr, signature } = await getWxJsDk()
      const getUser = async () => {
        try {
          const { data } = await getCurrentUser()
          // 存储用户信息
          saveToLocal('h5', 'userInfo', data)
          if (id) {
            props.history.push({
              pathname: `/${actionHref}`,
              search: `id=${id}`,
            })
          } else {
            props.history.push(`/${actionHref}`)
          }
        } catch (error) {
          console.log('重新授权')
          authorize()
        }
      }
      ;(window as any).wx.config({
        beta: true, // 必须这么写，否则wx.invoke调用形式的api会有问题
        debug: false, // 开启调试模式
        appId: appId, // 必填，企业微信的corpID
        timestamp: timeStamp, // 必填，生成签名的时间戳
        nonceStr: nonceStr, // 必填，生成签名的随机串
        signature: signature, // 必填，签名，见 附录-JS-SDK使用权限签名算法
        jsApiList: [
          'chooseImage',
          'getLocalImgData',
          'uploadImage',
          'previewImage',
          'closeWindow',
        ], // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
      })
      if (process.env.NODE_ENV === 'development') {
        getUser()
      } else {
        ;(window as any).wx.ready(() => {
          getUser()
        })
      }
    }
    if (wxToken) {
      saveToLocal('h5', 'wxToken', wxToken)
      getConfig()
    } else if (storeToken) {
      getConfig()
    } else {
      console.log('重新授权')
      authorize()
    }
  }

  getInit()

  return <Loading />
}

export default StartApp
