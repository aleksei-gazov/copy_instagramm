import React from 'react'

import cls from './ProfileSetting.module.scss'

import { ProfilePhotoBlock } from 'features/profile/profileSetting/ui/profilePhoto/profilePhotoBlock'
import { UserProfileData } from 'features/profile/profileSetting/ui/userProfileData/userProfileData'
import { UserProfileNavigate } from 'features/profile/profileSetting/ui/userProfileNavigate/userProfileNavigate'
import { getLayout } from 'widgets/Layout/Layout'

const UserProfileSetting = () => {
  return (
    <div className={cls.ProfileSetting}>
      <UserProfileNavigate />
      <div className={cls.profileSettingBlock}>
        <ProfilePhotoBlock />
        <UserProfileData />
      </div>
    </div>
  )
}

UserProfileSetting.getLayout = getLayout
export default UserProfileSetting
