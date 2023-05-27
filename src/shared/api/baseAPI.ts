import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

import { BASE_URL } from 'shared/const/const'

export const baseAPI = createApi({
  reducerPath: 'baseAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: () => ({}),
  tagTypes: [],
})
