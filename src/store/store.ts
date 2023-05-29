import { ReducerAction } from 'react'

import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { StateSchema } from './stateSchema'

import { loginReducer } from 'features/login'
import { baseAPI } from 'shared/api/baseAPI'
import { loadState, saveState } from 'shared/lib/localStorage/localStorage'

const rootStore: ReducersMapObject<StateSchema> = {
  [baseAPI.reducerPath]: baseAPI.reducer,
  login: loginReducer,
}

export const store = configureStore({
  reducer: rootStore,
  middleware: gDM => gDM().concat(baseAPI.middleware),
  preloadedState: loadState(),
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
store.subscribe(() => {
  saveState(store.getState())
})
