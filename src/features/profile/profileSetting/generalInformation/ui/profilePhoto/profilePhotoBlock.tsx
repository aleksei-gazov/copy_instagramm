import React, { useState } from 'react'

import Photo from '../../../../../../../public/icon/photo.svg'

import cls from './profilePhotoBlock.module.scss'

import { SettingPhotoModal } from 'features/profile/profileSetting/photoSetting/ui/SettingPhotoModal/SettingPhotoModal'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'

export const ProfilePhotoBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div className={cls.photoBlock}>
      <div className={cls.photo}>
        <Photo />
      </div>
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.addButton}
        size={ButtonSize.M}
        onClick={() => setIsModalOpen(true)}
      >
        Add a Profile Photo
      </Button>
      <SettingPhotoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  )
}
