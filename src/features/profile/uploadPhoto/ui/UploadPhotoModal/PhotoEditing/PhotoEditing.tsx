import { FC, memo, useCallback, useState } from 'react'

import AvatarEditor from 'react-avatar-editor'
import { useSelector } from 'react-redux'

import ArrowBack from '../../../../../../../public/icon/arrow-back.svg'

import { CloseModal } from './CloseModal/CloseModal'
import cls from './PhotoEditing.module.scss'

import { getIsOpenModal } from 'features/profile/uploadPhoto/model/selectors/getIsOpenModal/getIsOpenModal'
import { setCloseModal } from 'features/profile/uploadPhoto/model/slice/uploadPhotoSlice'
import { PopoverCrop } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/popovers/popoverCrop/PopoverCrop'
import { PopoverZoom } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/popovers/popoverZoom/PopoverZoom'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

interface PhotoEditingProps {
  image: string
}

export const PhotoEditing: FC<PhotoEditingProps> = memo(({ image }) => {
  const [scale, setScale] = useState(1)
  const [crop, setCrop] = useState<undefined | number[]>(undefined)
  const dispatch = useAppDispatch()
  const isOpen = useSelector(getIsOpenModal)
  const OnOpenedCloseModal = useCallback(() => {
    dispatch(setCloseModal(false))
  }, [])

  return (
    <div className={cls.PhotoEditing}>
      <CloseModal isOpen={isOpen} callBack={OnOpenedCloseModal} />
      <header className={cls.header}>
        <Button
          onClick={() => dispatch(setCloseModal(true))}
          className={cls.btn}
          theme={ButtonTheme.Clear}
        >
          <ArrowBack />
        </Button>
        <Text tag={'h2'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
          Editing
        </Text>
        <Button theme={ButtonTheme.Clear}>
          <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L} color={TextColorTheme.PRIMARY}>
            Next
          </Text>
        </Button>
      </header>
      <div>
        <AvatarEditor
          image={image}
          width={525}
          height={669}
          scale={scale}
          className={cls.canvas}
          border={crop}
        />

        <div className={cls.popup}>
          <PopoverCrop onCrop={setCrop} />
          <PopoverZoom onScale={setScale} scale={scale} />
        </div>
      </div>
    </div>
  )
})
