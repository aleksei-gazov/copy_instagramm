import React from 'react'

import { Controller, FieldValues } from 'react-hook-form'

import { useGetProfileQuery } from '../../../../service/profile'

import cls from './userProfileData.module.scss'

import { getAuthMeData } from 'shared/hoc'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { useFormHandler } from 'shared/hooks/useFormHandler'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { CustomDatePicker } from 'shared/ui/DatePicker/DatePicker'
import { Input } from 'shared/ui/Input/Input'
import { TextArea } from 'shared/ui/TextArea/TextArea'

export const UserProfileData = () => {
  const {
    isValid,
    register,
    handleSubmit,
    errorName,
    errorCity,
    errorFirstName,
    errorLastName,
    control,
  } = useFormHandler('name', 'firstName', 'lastName', 'city', 'textArea')
  const authMeData = useAppSelector(getAuthMeData)
  const userId = authMeData?.userId
  const { data: profile } = useGetProfileQuery(userId)

  const onSubmit = (data: FieldValues) => {
    console.log(data)
    const payload = {
      userName: data.name,
      firstName: data.firstName,
      lastName: data.lastName,
      city: data.city,
      dateOfBirth: data.date,
      aboutMe: data.textArea,
    }
  }

  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        autoFocus
        register={register}
        nameForValidate={'name'}
        error={errorName}
        defaultValue={profile?.userName}
        title={'User Name'}
      />
      <Input
        register={register}
        nameForValidate={'firstName'}
        error={errorFirstName}
        defaultValue={profile?.firstName}
        title={'First Name'}
      />
      <Input
        register={register}
        nameForValidate={'lastName'}
        error={errorLastName}
        defaultValue={profile?.lastName}
        title={'Last Name'}
      />
      <Controller
        control={control}
        name="date"
        defaultValue={profile?.dateOfBirth}
        render={({ field }) => (
          <CustomDatePicker
            title={'Date of birthday'}
            start={field.value}
            onChange={date => field.onChange(date)}
          />
        )}
      />
      <Input
        defaultValue={profile?.city}
        register={register}
        nameForValidate={'city'}
        error={errorCity}
        title={'City'}
      />
      <TextArea
        defaultValue={profile?.aboutMe}
        register={register}
        nameForValidate={'textArea'}
        title={'About Me'}
      />
      <div className={cls.decor}></div>
      <Button
        disabled={!isValid}
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
