import { useEffect } from 'react'

import { Controller } from 'react-hook-form'

import {
  useDelProfileMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} from '../../service/profile'

import cls from './userProfileData.module.scss'

import { getAuthMeData } from 'shared/hoc'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { useProfileDataForm } from 'shared/hooks/useProfileDataForm'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ControlledInputNew } from 'shared/ui/ControlledInput/ControlledInput'
import { ControlledTextArea } from 'shared/ui/ControlledTextArea/ControlledTextArea'
import { CustomDatePicker } from 'shared/ui/DatePicker/DatePicker'
import { LoaderContent } from 'shared/ui/LoaderContent/LoaderContent'

export const UserProfileData = () => {
  const authMeData = useAppSelector(getAuthMeData)
  const userId = authMeData?.userId
  const {
    data: profileData,
    isLoading: isLoadingGetProfile,
    isSuccess,
  } = useGetProfileQuery(userId)
  const { control, handleSubmit, setValue } = useProfileDataForm()
  const [profile, { isLoading: isLoadingUpdateProfile }] = useUpdateProfileMutation()
  const [delProfile] = useDelProfileMutation()

  const onSubmit = handleSubmit(data => {
    profile(data)
  })

  useEffect(() => {
    if (isSuccess) {
      setValue('userName', profileData.userName)
      setValue('firstName', profileData.firstName)
      setValue('lastName', profileData.lastName)
      setValue('dateOfBirth', profileData.dateOfBirth)
      setValue('city', profileData.city)
      setValue('aboutMe', profileData.aboutMe)
    }
  }, [profileData])

  return (
    <form className={cls.form} onSubmit={onSubmit}>
      <div className={cls.form}>
        {(isLoadingGetProfile || isLoadingUpdateProfile) && <LoaderContent />}
        <ControlledInputNew control={control} name={'userName'} title={'User Name'} />
        <ControlledInputNew control={control} name={'firstName'} title={'First Name'} />
        <ControlledInputNew control={control} name={'lastName'} title={'Last Name'} />
        <Controller
          control={control}
          name={'dateOfBirth'}
          defaultValue={profileData?.dateOfBirth}
          render={({ field }) => (
            <CustomDatePicker
              title={'Date of birthday'}
              start={field.value}
              onChange={date => field.onChange(date)}
            />
          )}
        />
        <ControlledInputNew control={control} name={'city'} title={'City'} />
        <ControlledTextArea control={control} name={'aboutMe'} title={'aboutMe'} />
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
      <button onClick={e => delProfile(userId)}>DEL PROFILE</button>
    </form>
  )
}
