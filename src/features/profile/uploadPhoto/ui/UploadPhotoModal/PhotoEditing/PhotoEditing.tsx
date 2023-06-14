import { FC, memo, useCallback, useEffect, useRef, useState } from 'react'

import AvatarEditor from 'react-avatar-editor'
import { useSelector } from 'react-redux'

import ArrowBack from '../../../../../../../public/icon/arrow-back.svg'

import { CloseModal } from './CloseModal/CloseModal'
import cls from './PhotoEditing.module.scss'

import { getIsOpenModal } from 'features/profile/uploadPhoto/model/selectors/getIsOpenModal/getIsOpenModal'
import { getStep } from 'features/profile/uploadPhoto/model/selectors/getStep/getStep'
import { setCloseModal, setStep } from 'features/profile/uploadPhoto/model/slice/uploadPhotoSlice'
import { Filters } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/Filters/Filters'
import { PopoverCrop } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/popovers/popoverCrop/PopoverCrop'
import { PopoverZoom } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/popovers/popoverZoom/PopoverZoom'
import { Publication } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/Publication/Publication'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

interface PhotoEditingProps {
  image: string
}

export const PhotoEditing: FC<PhotoEditingProps> = memo(({ image }) => {
  const step = useAppSelector(getStep)
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

  const onNextStepHandler = () => {
    if (step < 2) {
      const nextStep = step + 1

      dispatch(setStep(nextStep))
    }
  }

  const prevStepHandler = () => {
    if (step) {
      const nextStep = step - 1

      dispatch(setStep(nextStep))
    } else {
      dispatch(setCloseModal(true))
    }
  }

  const onPublishPost = () => {}

  return (
    <div className={cls.PhotoEditing}>
      <CloseModal isOpen={isOpen} callBack={OnOpenedCloseModal} />
      <header className={classNames(cls.header, {}, [])}>
        <Button onClick={prevStepHandler} className={cls.btn} theme={ButtonTheme.Clear}>
          <ArrowBack />
        </Button>
        <Text tag={'h2'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
          {step === 2 ? 'Publication' : 'Crop'}
        </Text>
        {step === 2 ? (
          <Button onClick={onNextStepHandler} theme={ButtonTheme.Clear}>
            <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L} color={TextColorTheme.PRIMARY}>
              Publish
            </Text>
          </Button>
        ) : (
          <Button onClick={onPublishPost} theme={ButtonTheme.Clear}>
            <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L} color={TextColorTheme.PRIMARY}>
              Next
            </Text>
          </Button>
        )}
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
      <div className={classNames(cls.sidebarR, { [cls.open]: step !== 0 }, [])}>
        {step === 1 ? <Filters /> : <Publication />}
      </div>
    </div>
  )
})
