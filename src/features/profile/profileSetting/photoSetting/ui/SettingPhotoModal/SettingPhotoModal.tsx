import React, { useState } from 'react'

import Photo from '../../../../../../../public/icon/photo.svg'

import cls from './SettingPhotoModal.module.scss'

import { SelectedImage } from 'features/profile/profileSetting/photoSetting/ui/SelectedImage/SelectedImage'
import { InputTypeFile } from 'shared/ui/InputTypeFile/InputTypeFile'
import { ModalHeader } from 'shared/ui/ModalHeader/ModalHeader'
import { Portal } from 'shared/ui/Portal/Portal'

export type SettingPhotoModalType = {
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
}

export const SettingPhotoModal = ({ isModalOpen, setIsModalOpen }: SettingPhotoModalType) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const handleButtonClick = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  if (!isModalOpen) return null

  return (
    <Portal>
      <div className={cls.container}>
        <ModalHeader title={'Add a Profile Photo'} handleButtonClick={handleButtonClick} />
        <div className={cls.main}>
          <div className={cls.photoContainer}>
            {selectedImage ? (
              <SelectedImage selectedImage={selectedImage} />
            ) : (
              <Photo className={cls.photo} />
            )}
          </div>
          <div className={cls.selectPhoto}>
            <InputTypeFile setSelectedImage={setSelectedImage} />
          </div>
        </div>
      </div>
    </Portal>
  )
}
