import React, { PropsWithChildren } from 'react'

import cls from './userProfileData.module.scss'

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { CustomDatePicker } from 'shared/ui/DatePicker/DatePicker'
import { Input } from 'shared/ui/Input/Input'
import { TextArea } from 'shared/ui/TextArea/TextArea'

export const UserProfileData = () => {
  return (
    <form className={cls.form}>
      <Input title={'UserName'} />
      <Input title={'Name'} />
      <Input title={'SurName'} />
      <CustomDatePicker title={'Date of birthday'} />
      <Input title={'City'} />
      <TextArea title={'About Me'} />
      <div className={cls.decor}></div>
      <Button
        type={'submit'}
        theme={ButtonTheme.PRIMARY}
        size={ButtonSize.XS}
        className={cls.button}
      >
        Save Changes
      </Button>
    </form>
  )
}
