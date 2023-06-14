import React, { FC, memo, useCallback, useState } from 'react'

import Plus from '../../../../../public/icon/plus-square.svg'

import cls from './UploadPhoto.module.scss'
import { UploadPhotoModal } from './UploadPhotoModal/UploadPhotoModal'

import { getImage } from 'features/profile/uploadPhoto/model/selectors/getImage/getImage'
import {
  setClearImagesAvatar,
  setCloseModal,
} from 'features/profile/uploadPhoto/model/slice/uploadPhotoSlice'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Portal } from 'shared/ui/Portal/Portal'
import { Text, TextFontTheme } from 'shared/ui/Text/Text'

interface UploadPhotoProps {
  className?: string
}

export const UploadPhoto: FC<UploadPhotoProps> = memo(({ className = '' }) => {
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const image = useAppSelector(getImage)
  const onClickHandler = () => {
    setIsOpen(prev => !prev)
  }

  const onChangeModalOpened = useCallback(() => {
    if (image) {
      dispatch(setCloseModal(true))
    } else {
      setIsOpen(prev => !prev)
    }
  }, [image])

  return (
    <>
      <Button onClick={onClickHandler} theme={ButtonTheme.Clear} className={cls.btn}>
        <Plus fill={'currentColor'} />
        <Text tag={'span'} font={TextFontTheme.INTER_MEDIUM_L} className={className}>
          Create
        </Text>
      </Button>
      {isOpen && (
        <Portal>
          <UploadPhotoModal isOpen={isOpen} callback={onChangeModalOpened} />
        </Portal>
      )}
    </>
  )
})
