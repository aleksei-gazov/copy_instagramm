import React from 'react'

import { Controller, FieldValues } from 'react-hook-form'

import {
  useDelProfileMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} from '../../service/profile'

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
  const { data: profileData } = useGetProfileQuery(userId)
  const [profile] = useUpdateProfileMutation()
  const [delProfile] = useDelProfileMutation()

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

    profile(payload)
  }

  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        autoFocus
        register={register}
        nameForValidate={'name'}
        error={errorName}
        defaultValue={profileData?.userName}
        title={'User Name'}
      />
      <Input
        register={register}
        nameForValidate={'firstName'}
        error={errorFirstName}
        defaultValue={profileData?.firstName}
        title={'First Name'}
      />
      <Input
        register={register}
        nameForValidate={'lastName'}
        error={errorLastName}
        defaultValue={profileData?.lastName}
        title={'Last Name'}
      />
      <Controller
        control={control}
        name="date"
        defaultValue={profileData?.dateOfBirth}
        render={({ field }) => (
          <CustomDatePicker
            title={'Date of birthday'}
            start={field.value}
            onChange={date => field.onChange(date)}
          />
        )}
      />
      <Input
        defaultValue={profileData?.city}
        register={register}
        nameForValidate={'city'}
        error={errorCity}
        title={'City'}
      />
      <TextArea
        defaultValue={profileData?.aboutMe}
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
      {/*//TODO*/}
      {/*delete button*/}
      <button onClick={e => delProfile(userId)}>DEL PROFILE</button>
    </form>
  )
}
