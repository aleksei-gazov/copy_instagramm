import { LoginParamsType } from 'features/login/authByEmail/service/types'
import { baseAPI } from 'shared/api/baseAPI'

export const authByEmail = baseAPI.injectEndpoints({
  endpoints: build => ({
    login: build.query<LoginParamsType, void>({
      query: arg => ({
        url: `/api/auth/login`,
        method: 'Post',
        body: arg,
      }),
    }),
  }),
})
