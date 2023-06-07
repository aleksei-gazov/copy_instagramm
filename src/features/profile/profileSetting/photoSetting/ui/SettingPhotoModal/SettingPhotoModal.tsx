import React from 'react'

import Photo from '../../../../../../../public/icon/photo.svg'

import cls from './SettingPhotoModal.module.scss'

import { InputTypeFile } from 'shared/ui/InputTypeFile/InputTypeFile'
import { ModalHeader } from 'shared/ui/ModalHeader/ModalHeader'
import { Portal } from 'shared/ui/Portal/Portal'

export type SettingPhotoModalType = {
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
}

export const SettingPhotoModal = ({ isModalOpen, setIsModalOpen }: SettingPhotoModalType) => {
  const handleButtonClick = () => {
    setIsModalOpen(false)
  }

  if (!isModalOpen) return null

  return (
    <Portal>
      <div className={cls.container}>
        <ModalHeader title={'Add a Profile Photo'} handleButtonClick={handleButtonClick} />
        <div className={cls.main}>
          <div className={cls.photoContainer}>
            <Photo className={cls.photo} />
          </div>
          <div className={cls.selectPhoto}>
            <InputTypeFile />
          </div>
        </div>
      </div>
    </Portal>
  )
}
