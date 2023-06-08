import React from 'react'

import { Controller, FieldValues } from 'react-hook-form'

import cls from './userProfileData.module.scss'

import { getUserName } from 'shared/hoc'
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
  const userName = useAppSelector(getUserName)

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
    </form>
  )
}
