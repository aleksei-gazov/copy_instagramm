import { ProfileParamsType } from './types'

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
    }),
    updateProfile: build.mutation<void, ProfileParamsType>({
      query: arg => ({
        url: `/api/users/profile`,
        method: 'PUT',
        body: arg,
      }),
    }),
  }),
})

export const { useGetProfileQuery, useUpdateProfileMutation } = profile
