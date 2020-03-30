import { constants } from './index'
import { IAction } from '@/store/types'

/**
 * @description 设置标签人员数据
 * @author biHongBin
 * @param {Array} data
 * @Date 2020-01-10 09:51:20
 */
export const changeGlobalLabelList = (data: any): IAction<any> => ({
  type: constants.CHANGE_GLOBAL_LABEL_LIST,
  payload: data,
})
