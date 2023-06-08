import {
  ProfileParamsType,
  UpdateUserInfoSchema,
} from 'features/profile/profileSetting/generalInformation/service/types'
import { baseAPI } from 'shared/api/baseAPI'

export const profile = baseAPI.injectEndpoints({
  endpoints: build => ({
    getProfile: build.query<ProfileParamsType, number | null>({
      query: arg => {
        return {
          url: '/api/users/profile',
          params: { arg },
        }
      },
      providesTags: ['User'],
    }),
    updateProfile: build.mutation<void, UpdateUserInfoSchema>({
      query: arg => ({
        url: `/api/users/profile`,
        method: 'PUT',
        body: arg,
      }),
      invalidatesTags: ['User'],
    }),
    delProfile: build.mutation<void, number | null>({
      query: arg => ({
        url: `/api/users/profile`,
        method: 'DELETE',
        body: arg,
      }),
      invalidatesTags: ['User'],
    }),
  }),
  overrideExisting: true,
})

export const { useGetProfileQuery, useUpdateProfileMutation, useDelProfileMutation } = profile
