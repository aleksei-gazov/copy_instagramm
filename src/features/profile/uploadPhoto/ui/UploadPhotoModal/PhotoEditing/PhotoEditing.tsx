import { FC, memo, useCallback, useEffect, useRef, useState } from 'react'

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
  const [height, setHeight] = useState(500)
  const [width, setWidth] = useState(500)
  const [scale, setScale] = useState(1)
  const parentRef = useRef<HTMLDivElement>(null)
  const [crop, setCrop] = useState<undefined | number>(undefined)
  const dispatch = useAppDispatch()
  const isOpen = useSelector(getIsOpenModal)
  const OnOpenedCloseModal = useCallback(() => {
    dispatch(setCloseModal(false))
  }, [])

  const stretchAvatar = () => {
    const parentElement = parentRef.current

    if (parentElement) {
      const parentWidth = parentElement.offsetWidth
      const parentHeight = parentElement.offsetHeight

      // Задаем новые размеры для аватарки
      // Можно использовать useState для установки размеров
      const newWidth = parentWidth
      const newHeight = parentHeight

      setWidth(newWidth)
      setHeight(newHeight)
      // Обновляем размеры аватарки
      // Можно использовать useState и передать новые размеры в свойства width и height компонента AvatarEditor
    }
  }

  const onChangeParam = useCallback((width: number, height: number, crop: number | undefined) => {
    setCrop(crop)
    setHeight(height)
    setWidth(width)
  }, [])

  useEffect(() => {
    stretchAvatar()
    window.addEventListener('resize', stretchAvatar)

    return () => {
      window.removeEventListener('resize', stretchAvatar)
    }
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
      <div className={cls.wrapper} ref={parentRef}>
        <div className={cls.avatarContainer}>
          <AvatarEditor
            image={image}
            width={width}
            height={height}
            scale={scale}
            className={cls.canvas}
            border={crop ? 1 : 0}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className={cls.popup}>
          <PopoverCrop parentRef={parentRef} callBack={onChangeParam} />
          <PopoverZoom onScale={setScale} scale={scale} />
        </div>
      </div>
    </div>
  )
})
