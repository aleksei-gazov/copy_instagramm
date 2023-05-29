import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'

import { setToken } from 'features/login'
import { BASE_URL } from 'shared/const/const'
import { StateSchema } from 'store/stateSchema'
import { store } from 'store/store'

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const {
      login: { accessToken },
    } = getState() as StateSchema

    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`)
    }

    return headers
  },
})

const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery('/api/auth/update-tokens', api, extraOptions)

    if (refreshResult.data) {
      store.dispatch(setToken(refreshResult.data as string))

      // retry the initial query
      result = await baseQuery(args, api, extraOptions)
    } else {
      // api.dispatch(logout())
    }
  }

  return result
}

export const baseAPI = createApi({
  reducerPath: 'baseAPI',
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
  tagTypes: [],
})
