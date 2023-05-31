import { ReducerAction } from 'react'

import {
  configureStore,
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { StateSchema } from './stateSchema'

import { loginReducer } from 'features/login'
import { baseAPI } from 'shared/api/baseAPI'
import { loadState, saveState } from 'shared/lib/localStorage/localStorage'

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => next => action => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
  if (isRejectedWithValue(action)) {
    if (action.payload.data.messages[0]) {
      console.log(action.payload.data.messages[0].message)
    } else {
      console.log('some error')
    }
    // toast.warn({ title: 'Async error!', message: action.error.data.message })
  }

  return next(action)
}

const rootStore: ReducersMapObject<StateSchema> = {
  [baseAPI.reducerPath]: baseAPI.reducer,
  login: loginReducer,
}

export const store = configureStore({
  reducer: rootStore,
  middleware: gDM => gDM().concat([baseAPI.middleware, rtkQueryErrorLogger]),
  preloadedState: loadState(),
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
store.subscribe(() => {
  saveState(store.getState())
})
