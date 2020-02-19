import { fromJS } from 'immutable'
import { constants } from './index'

/**
 * @description 设置标签人员数据
 * @author biHongBin
 * @param {Array} data
 * @Date 2020-01-10 09:51:20
 */
export const changeGlobalLabelList = (data: any) => ({
  type: constants.CHANGE_GLOBAL_LABEL_LIST,
  data: fromJS(data),
})
