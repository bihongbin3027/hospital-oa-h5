const localName: string = 'wx_hospital_oa_h5'

/**
 * @description 设置localStorage
 * @author biHongBin
 * @param {String} id
 * @param {String} key
 * @param {String} value
 * @return void
 * @Date 2020-02-21 17:08:59
 */
export function saveToLocal(id: string, key: string, value: string) {
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
 * @return void
 * @Date 2020-02-21 17:09:42
 */
// 读取localStorage
export function loadFromLocal(id: string, key: string, def: any = '') {
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
