import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'

import { clearToken, setToken } from 'features/login'
import login from 'pages/login'
import { BASE_URL } from 'shared/const/const'
import { StateSchema } from 'store/stateSchema'
import { store } from 'store/store'

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
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
    const refreshResult = await baseQuery(
      { url: '/api/auth/update-tokens', method: 'POST' },
      api,
      extraOptions
    )

    console.log(refreshResult)

    if (refreshResult.data) {
      api.dispatch(setToken(refreshResult.data as { accessToken: string }))
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(clearToken())
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
