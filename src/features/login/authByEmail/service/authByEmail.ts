import { LoginParamsType, LoginResponseType } from './types'

import { setToken } from 'features/login/model/slice/loginSlice'
import { baseAPI } from 'shared/api/baseAPI'

export const authByEmail = baseAPI.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<LoginResponseType, LoginParamsType>({
      query: arg => ({
        url: `/api/auth/login`,
        method: 'Post',
        body: arg,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled

          dispatch(setToken(data.accessToken))
        } catch (err) {
          console.error(err)
        }
      },
    }),
  }),
})

export const { useLoginMutation } = authByEmail
