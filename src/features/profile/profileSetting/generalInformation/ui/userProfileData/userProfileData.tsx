import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import * as Yup from 'yup'

import {
  useDelProfileMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} from '../../service/profile'

import cls from './userProfileData.module.scss'

import { getAuthMeData } from 'shared/hoc'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ControlledInputNew } from 'shared/ui/ControlledInput/ControlledInput'
import { CustomDatePicker } from 'shared/ui/DatePicker/DatePicker'
import { Input } from 'shared/ui/Input/Input'
import { LoaderContent } from 'shared/ui/LoaderContent/LoaderContent'
import { TextArea } from 'shared/ui/TextArea/TextArea'

// ----------------------------------

const userProfileDataFormSchema = yup.object().shape({
  userName: Yup.string().required().min(6).max(30),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  dateOfBirth: Yup.date().required(),
  city: Yup.string().required(),
  aboutMe: Yup.string().required(),
})

type FormData = yup.InferType<typeof userProfileDataFormSchema>
const useProfileDataForm = () => {
  return useForm<FormData>({
    mode: 'onSubmit',
    resolver: yupResolver(userProfileDataFormSchema),
  })
}

// -------------------------------------

export const UserProfileData = () => {
  const { control, handleSubmit, setValue } = useProfileDataForm()
  const authMeData = useAppSelector(getAuthMeData)
  const userId = authMeData?.userId
  const {
    data: profileData,
    isLoading: isLoadingGetProfile,
    isSuccess,
  } = useGetProfileQuery(userId)
  const [profile, { isLoading: isLoadingUpdateProfile }] = useUpdateProfileMutation()
  const [delProfile] = useDelProfileMutation()

  const onSubmit = handleSubmit(data => {
    profile(data)
  })

  if (isSuccess) {
    setValue('userName', profileData.userName)
    setValue('firstName', profileData.firstName)
    setValue('lastName', profileData.lastName)
    setValue('dateOfBirth', profileData.dateOfBirth)
    setValue('city', profileData.city)
    setValue('aboutMe', profileData.aboutMe)
  }

  return (
    <form className={cls.form} onSubmit={onSubmit}>
      <div className={cls.form}>
        {(isLoadingGetProfile || isLoadingUpdateProfile) && <LoaderContent />}
        <ControlledInputNew control={control} name={'userName'} title={'User Name'} />
        <ControlledInputNew control={control} name={'firstName'} title={'First Name'} />
        <ControlledInputNew control={control} name={'lastName'} title={'Last Name'} />
        {/*<Controller*/}
        {/*  control={control}*/}
        {/*  name="date"*/}
        {/*  defaultValue={profileData?.dateOfBirth}*/}
        {/*  render={({ field }) => (*/}
        {/*    <CustomDatePicker*/}
        {/*      title={'Date of birthday'}*/}
        {/*      start={field.value}*/}
        {/*      onChange={date => field.onChange(date)}*/}
        {/*    />*/}
        {/*  )}*/}
        {/*/>*/}
        <ControlledInputNew control={control} name={'city'} title={'City'} />
        {/*<TextArea*/}
        {/*  defaultValue={profileData?.aboutMe}*/}
        {/*  register={register}*/}
        {/*  nameForValidate={'textArea'}*/}
        {/*  title={'About Me'}*/}
        {/*/>*/}
      </div>
      <div className={cls.decor}></div>
      <Button
        // disabled={!isValid}
        type={'submit'}
        theme={ButtonTheme.PRIMARY}
        size={ButtonSize.XS}
        className={cls.button}
      >
        Save Changes
      </Button>
      {/*//TODO*/}
      {/*delete button*/}
      {/*<button onClick={e => delProfile(userId)}>DEL PROFILE</button>*/}
    </form>
  )
}
