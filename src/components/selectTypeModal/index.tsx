import React, { useState } from 'react'
import { Modal, Flex, Toast } from 'antd-mobile'
import { TagUi } from '@/style/baseUi'
import { SelectTypeBox } from './style'

interface ProsType {
  title: string
  visible: boolean
  data: Array<any>
  confirm: (value: object) => void
  cancel: () => void
}

function SelectTypeModal(props: ProsType) {
  const [selected, setSelected] = useState({ name: '' })

  return (
    <Modal
      title={props.title}
      visible={props.visible}
      closable
      transparent
      onClose={props.cancel}
      footer={[
        {
          text: '取消',
          onPress: () => {
            props.cancel()
          },
        },
        {
          text: '确定',
          onPress: () => {
            if (!selected.name) {
              Toast.info(props.title, 1.5)
              return
            }
            props.confirm(selected)
          },
        },
      ]}
    >
      <SelectTypeBox>
        <Flex>
          {props.data.map((item, index) => (
            <TagUi
              className={`tag-grey md ${
                item.name === selected.name ? 'tag-active' : ''
              }`}
              onClick={() => setSelected(item)}
              key={index}
            >
              {item.name}
            </TagUi>
          ))}
        </Flex>
      </SelectTypeBox>
    </Modal>
  )
}

export default SelectTypeModal
