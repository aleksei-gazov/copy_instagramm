import React from 'react'

import cls from './ProfileSetting.module.scss'

import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import { getLayout } from 'widgets/Layout/Layout'

const UserProfileSetting = () => {
  return (
    <div className={cls.ProfileSetting}>
      <Text tag={'span'} font={TextFontTheme.INTER_BOLD_S} color={TextColorTheme.LIGHT}>
        Setting User Profileytryrfyryry
      </Text>
    </div>
  )
}

UserProfileSetting.getLayout = getLayout
export default UserProfileSetting
