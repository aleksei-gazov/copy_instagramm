import { AuthMeResponse } from './types'

import { setAuthMeDAta } from 'features/auth/authMe/model/slice/authMeSlice'
import { baseAPI } from 'shared/api/baseAPI'

const authMeApi = baseAPI.injectEndpoints({
  endpoints: build => ({
    auth: build.query<AuthMeResponse, void>({
      query: () => ({
        url: 'api/auth/me',
      }),
      providesTags: ['AuthMe'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled

          dispatch(setAuthMeDAta({ authMeData: data }))
        } catch (err) {
          console.error(err)
        }
      },
    }),
  }),
})

export const { useAuthQuery } = authMeApi
