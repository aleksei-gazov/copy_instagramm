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

import { loaderReducer, setLoading } from 'entities/globalLoader'
import { authMeReducer } from 'features/auth/authMe/model/slice/authMeSlice'
import { loginReducer } from 'features/auth/login'
import { registrationReducer } from 'features/auth/registration/model/slice/registrationSlice'
import { baseAPI } from 'shared/api/baseAPI'
import { loadState, saveState } from 'shared/lib/localStorage/localStorage'

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => next => action => {
  let currentError: string

  if (isRejectedWithValue(action)) {
    if (action.payload.status === 401) return next(action)

    if (action.payload.data?.messages?.length) {
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

const loadingMiddleware: Middleware =
  ({ dispatch }) =>
  next =>
  action => {
    const result = next(action)

    if (action.type.endsWith('/pending')) {
      dispatch(setLoading(true))
    } else if (action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected')) {
      dispatch(setLoading(false))
    }

    return result
  }

const rootStore: ReducersMapObject<StateSchema> = {
  [baseAPI.reducerPath]: baseAPI.reducer,
  login: loginReducer,
  registration: registrationReducer,
  authMe: authMeReducer,
  isLoading: loaderReducer,
}

export const store = configureStore({
  reducer: rootStore,
  middleware: gDM => gDM().concat([baseAPI.middleware, rtkQueryErrorLogger, loadingMiddleware]),
  preloadedState: loadState(),
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
store.subscribe(() => {
  saveState(store.getState())
})
