import { baseAPI } from 'shared/api/baseAPI'

const updateToken = baseAPI.injectEndpoints({
  endpoints: build => ({
    refreshToken: build.mutation<{ accessToken: string }, void>({
      query: () => ({
        url: '/api/auth/update-tokens',
        method: 'POST',
      }),
    }),
  }),
})

export const { useRefreshTokenMutation } = updateToken
export const { refreshToken } = updateToken.endpoints
