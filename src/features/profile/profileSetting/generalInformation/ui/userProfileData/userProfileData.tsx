import React from 'react'

import { FieldValues } from 'react-hook-form'

import cls from './userProfileData.module.scss'

import { getUserName } from 'shared/hoc'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { useFormHandler } from 'shared/hooks/useFormHandler'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { CustomDatePicker } from 'shared/ui/DatePicker/DatePicker'
import { Input } from 'shared/ui/Input/Input'
import { TextArea } from 'shared/ui/TextArea/TextArea'

export const UserProfileData = () => {
  const { isValid, register, handleSubmit, errorName, errorCity, errorFirstName, errorLastName } =
    useFormHandler('name', 'firstName', 'lastName', 'city', 'textArea')
  const userName = useAppSelector(getUserName)

  const onSubmit = (data: FieldValues) => {
    console.log(data)
    const payload = {
      userName: data.name,
      firstName: data.firstName,
      lastName: data.lastName,
      city: data.city,
      dateOfBirth: '',
      aboutMe: data.textArea,
    }
  }

  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        nameForValidate={'name'}
        error={errorName}
        defaultValue={userName}
        title={'User Name'}
      />
      <Input
        register={register}
        nameForValidate={'firstName'}
        error={errorFirstName}
        defaultValue={'Данные из гет запроса в defaultValue'}
        title={'First Name'}
      />
      <Input
        register={register}
        nameForValidate={'lastName'}
        error={errorLastName}
        defaultValue={'Данные из гет запроса в defaultValue'}
        title={'Last Name'}
      />
      <CustomDatePicker title={'Date of birthday'} />
      <Input
        register={register}
        nameForValidate={'city'}
        error={errorCity}
        defaultValue={'Данные из гет запроса в defaultValue'}
        title={'City'}
      />
      <TextArea
        register={register}
        nameForValidate={'textArea'}
        defaultValue={'Данные из гет запроса в defaultValue'}
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
