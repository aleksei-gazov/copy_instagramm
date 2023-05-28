import { LoginParamsType } from 'features/login/authByEmail/service/types'
import { baseAPI } from 'shared/api/baseAPI'

export const authByEmail = baseAPI.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<void, LoginParamsType>({
      query: arg => ({
        url: `/api/auth/login`,
        method: 'Post',
        body: arg,
      }),
    }),
  }),
})

export const { useLoginMutation } = authByEmail
