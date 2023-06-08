import React from 'react'

import { Controller, FieldValues } from 'react-hook-form'

import {
  useDelProfileMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} from '../../service/profile'

import cls from './userProfileData.module.scss'

import { getAuthMeData } from 'features/auth/authMe/model/selectors/getAuthMeData/getAuthMeData'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { useFormHandler } from 'shared/hooks/useFormHandler'
import { useSetValuesFromProfileData } from 'shared/hooks/useSetValues'
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
    setValue,
  } = useFormHandler('name', 'firstName', 'lastName', 'city', 'textArea')
  const authMeData = useAppSelector(getAuthMeData)
  const userId = authMeData?.userId
  const { data: profileData } = useGetProfileQuery(userId)
  const [profile] = useUpdateProfileMutation()
  const [delProfile] = useDelProfileMutation()

  useSetValuesFromProfileData(setValue, profileData)

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
        title={'User Name'}
      />
      <Input
        register={register}
        nameForValidate={'firstName'}
        error={errorFirstName}
        title={'First Name'}
      />
      <Input
        register={register}
        nameForValidate={'lastName'}
        error={errorLastName}
        title={'Last Name'}
      />
      <Controller
        control={control}
        name="date"
        render={({ field }) => (
          <CustomDatePicker
            title={'Date of birthday'}
            start={field.value}
            onChange={date => field.onChange(date)}
          />
        )}
      />
      <Input register={register} nameForValidate={'city'} error={errorCity} title={'City'} />
      <TextArea register={register} nameForValidate={'textArea'} title={'About Me'} />
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
