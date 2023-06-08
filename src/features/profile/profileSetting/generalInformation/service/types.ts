export type ProfileParamsType = {
  id: number
  userName: string
  firstName: any
  lastName: any
  city: any
  dateOfBirth: any
  aboutMe: any
  avatars: any[]
}

export type UpdateUserInfoSchema = Omit<ProfileParamsType, 'avatars' | 'id'>
