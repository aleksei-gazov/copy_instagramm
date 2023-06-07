export type UserProfileType = {
  id: number
  userName: string
  firstname: string
  city: string
  dateOfBirth: string
  aboutMe: string
  avatars: UserAvatarType[]
}
type UserAvatarType = {
  url: string
  width: number
  height: number
  fileSize: number
}
