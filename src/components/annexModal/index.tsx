import React, { useReducer } from 'react'
import { Modal, List } from 'antd-mobile'
import { IAction } from '@/store/types'

const Item = List.Item

interface PropType {
  visible: boolean
  close: () => void
  success: (val: object) => void
}

function reducer(state: any, action: IAction<any>) {
  switch (action.type) {
    case 'changeVisible':
      return {
        ...state,
        visible: action.payload,
      }
    default:
      return state
  }
}

function AnnexModal(props: PropType) {
  const [data, dispatch] = useReducer(reducer, {})

  /**
   * @description 上传拍照或相册文件
   * @author biHongBin
   * @param {String} type
   * @Date 2020-03-05 11:26:46
   */
  const imageAnnex = (type: 'album' | 'camera') => {
    let localIdArray: Array<object> = []
    ;(window as any).wx.chooseImage({
      sourceType: [type],
      success: function (res: any) {
        console.log('选择图片返回结果', res)
        localIdArray = res.localIds
        let i = 0
        let len = localIdArray.length
        const upload = () => {
          ;(window as any).wx.uploadImage({
            localId: localIdArray[i],
            success: function (svr: any) {
              const { serverId } = svr
              props.success({
                file: res.tempFiles[i],
                serverId: serverId,
              })
              i++
              if (i < len) {
                upload()
              }
            },
          })
        }
        upload()
      },
    })
  }

  /**
   * @description 拍照
   * @author biHongBin
   * @Date 2020-03-05 11:02:52
   */
  const handleTakePicture = () => {
    imageAnnex('camera')
  }

  /**
   * @description 相册
   * @author biHongBin
   * @Date 2020-03-05 11:41:28
   */
  const handlePhotoAlbum = () => {
    imageAnnex('album')
  }

  return (
    <Modal
      popup
      visible={props.visible}
      animationType="slide-up"
      onClose={() => props.close()}
    >
      <List renderHeader={() => <div>附件上传</div>}>
        <Item onClick={handleTakePicture}>拍照</Item>
        <Item onClick={handlePhotoAlbum}>本地相册</Item>
        <Item>附件</Item>
      </List>
    </Modal>
  )
}

export default AnnexModal
