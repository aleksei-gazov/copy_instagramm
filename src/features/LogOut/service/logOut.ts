import { baseAPI } from 'shared/api/baseAPI'

export const logOut = baseAPI.injectEndpoints({
  endpoints: build => ({
    logOut: build.mutation<void, any>({
      query: arg => ({
        url: `/api/auth/logout`,
        method: 'Post',
        body: arg,
      }),
    }),
  }),
})
export const { useLogOutMutation } = logOut
