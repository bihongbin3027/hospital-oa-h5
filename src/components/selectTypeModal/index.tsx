import React, { useState } from 'react'
import { Modal, Flex, Toast } from 'antd-mobile'
import { TagUi } from '@/style/baseUi'
import { IconStyle } from '@/style'
import { closeModalIcon } from '@/utils/config'
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

  const handleSelectItem = (item: any) => {
    setSelected(item)
    props.confirm(item)
  }

  return (
    <Modal title={props.title} popup visible={props.visible} animationType="slide-up">
      <SelectTypeBox>
        <Flex>
          {props.data.map((item, index) => (
            <TagUi
              className={`tag-grey md ${item.name === selected.name ? 'tag-active' : ''}`}
              onClick={() => handleSelectItem(item)}
              key={index}
            >
              {item.name}
            </TagUi>
          ))}
        </Flex>
        <IconStyle width={64} height={64} icon={closeModalIcon} onClick={() => props.cancel()} />
      </SelectTypeBox>
    </Modal>
  )
}

export default SelectTypeModal
