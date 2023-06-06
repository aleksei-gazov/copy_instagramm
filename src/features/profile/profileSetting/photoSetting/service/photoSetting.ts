import {
  ErrorResponseType,
  SettingPhotoRequestType,
} from 'features/profile/profileSetting/photoSetting/service/types'
import { baseAPI } from 'shared/api/baseAPI'

export const PhotoSetting = baseAPI.injectEndpoints({
  endpoints: build => ({
    sendAvatar: build.mutation<void | ErrorResponseType, SettingPhotoRequestType>({
      query: arg => ({
        url: `/api/users/profile/avatar`,
        method: 'POST',
        arg,
      }),
    }),
    deleteAvatar: build.mutation<void | ErrorResponseType, void>({
      query: () => ({
        url: `/api/users/profile/avatar`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const { useSendAvatarMutation, useDeleteAvatarMutation } = PhotoSetting
