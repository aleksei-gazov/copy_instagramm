import { baseAPI } from 'shared/api/baseAPI'

export const logOut = baseAPI.injectEndpoints({
  endpoints: build => ({
    logOut: build.mutation<void, any>({
      query: () => ({
        url: `/api/auth/logout`,
        method: 'POST',
      }),
    }),
  }),
})
export const { useLogOutMutation } = logOut
