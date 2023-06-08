import { ProfileParamsType } from './types'

import { baseAPI } from 'shared/api/baseAPI'

export const profile = baseAPI.injectEndpoints({
  endpoints: build => ({
    getProfile: build.query<ProfileParamsType, number | null>({
      query: Id => {
        return {
          url: '/api/users/profile',
          params: { Id },
        }
      },
    }),
  }),
})

export const { useGetProfileQuery } = profile
