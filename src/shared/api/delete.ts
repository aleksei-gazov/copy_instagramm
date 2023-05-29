import { baseAPI } from 'shared/api/baseAPI'

const deleteApi = baseAPI.injectEndpoints({
  endpoints: build => ({
    delete: build.query<void, void>({
      query: () => ({
        url: '/api/users/profile',
      }),
    }),
  }),
})

export const { useDeleteQuery } = deleteApi
