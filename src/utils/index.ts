const localName: string = 'wx_hospital_oa_h5'

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
