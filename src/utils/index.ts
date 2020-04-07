const localName: string = 'wx_hospital_oa_h5'

/**
 * @description 防抖函数(当一个事件持续触发时，指定间隔时间内不用再触发该事件)
 * @author biHongBin
 * @param {Function} fn
 * @param {Number} delay
 * @Date 2020-03-31 10:33:40
 */
export const debounce = function (this: any, fn: Function, delay: number) {
  let timer: number | undefined
  return (...args: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = undefined
    }, delay)
  }
}

/**
 * @description 节流函数(当一个事件持续触发时，保证一定时间内只执行一次)
 * @author biHongBin
 * @param {Function} fn
 * @param {Number} delay
 * @Date 2020-03-31 11:24:14
 */
export const throttle = function (this: any, fn: Function, delay: number) {
  let timer: number | undefined
  return (...args: any[]) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = undefined
      }, delay)
    }
  }
}

/**
 * @description 设置localStorage
 * @author biHongBin
 * @param {String} id
 * @param {String} key
 * @param {String} value
 * @Date 2020-02-21 17:08:59
 */
export const saveToLocal = (id: 'h5', key: string, value: any) => {
  let store = window.localStorage[localName]
  if (!store) {
    store = {}
    store[id] = {}
  } else {
    store = JSON.parse(store)
    if (!store[id]) {
      store[id] = {}
    }
  }
  store[id][key] = value
  window.localStorage[localName] = JSON.stringify(store)
}

/**
 * @description 读取localStorage
 * @author biHongBin
 * @param {String} id
 * @param {String} key
 * @Date 2020-02-21 17:09:42
 */
export const loadFromLocal = (id: 'h5', key: string, def: any = '') => {
  let store = window.localStorage[localName]
  if (!store) {
    return def
  }
  store = JSON.parse(store)[id]
  if (!store) {
    return def
  }
  let ret = store[key]
  return ret || def
}
