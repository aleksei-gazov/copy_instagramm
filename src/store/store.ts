import {
  configureStore,
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { toast } from 'react-toastify'

import { StateSchema } from './stateSchema'

import { loginReducer } from 'features/auth/login'
import { baseAPI } from 'shared/api/baseAPI'
import { loadState, saveState } from 'shared/lib/localStorage/localStorage'

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => next => action => {
  let currentError: string

  if (isRejectedWithValue(action)) {
    if (action.payload.data && action.payload.data.messages[0]) {
      currentError = action.payload.data.messages[0].message
    } else {
      currentError = 'some error'
    }

    toast.error(currentError, {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
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
