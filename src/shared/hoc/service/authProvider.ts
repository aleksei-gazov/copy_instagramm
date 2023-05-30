import { AuthMeResponse } from './types'

import { baseAPI } from 'shared/api/baseAPI'

const authMeApi = baseAPI.injectEndpoints({
  endpoints: build => ({
    auth: build.query<AuthMeResponse, void>({
      query: () => ({
        url: 'api/auth/me',
      }),
    }),
  }),
})

export const { useAuthQuery } = authMeApi