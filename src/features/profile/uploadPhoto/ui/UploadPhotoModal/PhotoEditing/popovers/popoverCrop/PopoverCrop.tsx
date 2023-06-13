import { Popover } from '@headlessui/react'

import SelectCrop1_1 from '../../../../../../../../../public/icon/select-crop-1-1.svg'
import SelectCrop16_9 from '../../../../../../../../../public/icon/select-crop-16-9.svg'
import SelectCrop4_5 from '../../../../../../../../../public/icon/select-crop-4-5.svg'
import SelectCropOriginal from '../../../../../../../../../public/icon/select-crop-original.svg'
import SelectCropIcon from '../../../../../../../../../public/icon/select-crop.svg'
import clsG from '../popovers.module.scss'

import cls from './PopoverCrop.module.scss'

type PropsType = {
  onCrop: (crop: undefined | number[]) => void
}

export const PopoverCrop = ({ onCrop }: PropsType) => {
  const popoverData = [
    { id: 1, value: undefined, title: 'Original', Icon: SelectCropOriginal },
    { id: 2, value: [1, 1], title: '1:1', Icon: SelectCrop1_1 },
    { id: 3, value: [4, 5], title: '4:5', Icon: SelectCrop4_5 },
    { id: 4, value: [16, 9], title: '16:9', Icon: SelectCrop16_9 },
  ]

  const handlerCrop = (currentCrop: number[] | undefined) => {
    onCrop(currentCrop)
  }

  return (
    <Popover className={clsG.popover}>
      <Popover.Panel className={clsG.popoverPanel}>
        {popoverData.map(el => (
          <button key={el.id} onClick={() => handlerCrop(el.value)} className={cls.item}>
            {el.title}
            <el.Icon />
          </button>
        ))}
      </Popover.Panel>

      <Popover.Button className={clsG.popoverButton}>
        <SelectCropIcon />
      </Popover.Button>
    </Popover>
  )
}
