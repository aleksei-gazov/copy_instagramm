import React, { FC, memo, MouseEvent } from 'react'

import Close from '../../../../../../public/icon/close.svg'

import { SelectPhoto } from './SelectPhoto/SelectPhoto'
import cls from './UploadPhotoModal.module.scss'

import { getImage } from 'features/profile/uploadPhoto/model/selectors/getImage/getImage'
import { getStep } from 'features/profile/uploadPhoto/model/selectors/getStep/getStep'
import { PhotoEditing } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/PhotoEditing'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface UploadPhotoModalProps {
  callback: () => void
  isOpen: boolean
}

export const UploadPhotoModal: FC<UploadPhotoModalProps> = memo(({ callback, isOpen }) => {
  const step = useAppSelector(getStep)
  const image = useAppSelector(getImage)
  const onClickContentHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const mods = {
    [cls.opened]: isOpen,
  }

  return (
    <div className={classNames(cls.Modal, mods, [])}>
      <Button className={cls.closeIcon} onClick={callback} theme={ButtonTheme.Clear}>
        <Close width={16} heigth={16} />
      </Button>
      <div onClick={callback} className={cls.overlay}>
        <div
          onClick={onClickContentHandler}
          className={classNames(cls.content, { [cls.open]: step !== 0 }, [])}
        >
          {image ? <PhotoEditing image={image} /> : <SelectPhoto />}
        </div>
      </div>
    </div>
  )
})
