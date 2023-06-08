// useSetValuesFromProfileData.ts
import { useEffect } from 'react'

import { UseFormSetValue } from 'react-hook-form'

type ProfileParamsType = {
  userName: string
  firstName: string
  lastName: string
  dateOfBirth: string
  city: string
  aboutMe: string
}

const fieldMap: { [K in keyof ProfileParamsType]?: string } = {
  userName: 'name',
  firstName: 'firstName',
  lastName: 'lastName',
  dateOfBirth: 'date',
  city: 'city',
  aboutMe: 'textArea',
}

export const useSetValuesFromProfileData = (
  setValue: UseFormSetValue<any>,
  profileData: ProfileParamsType | undefined
) => {
  useEffect(() => {
    if (profileData) {
      for (const key in fieldMap) {
        if (key in profileData) {
          setValue(
            fieldMap[key as keyof ProfileParamsType]!,
            profileData[key as keyof ProfileParamsType]
          )
        }
      }
    }
  }, [profileData, setValue])
}
