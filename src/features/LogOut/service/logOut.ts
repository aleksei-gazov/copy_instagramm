import { LoginParamsType } from 'features/login/authByEmail/service/types'
import { baseAPI } from 'shared/api/baseAPI'

export const logOut = baseAPI.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<void, LoginParamsType>({
      query: arg => ({
        url: `/api/auth/logout`,
        method: 'Post',
        body: '',
      }),
    }),
  }),
})

export const { useLoginMutation } = logOut
