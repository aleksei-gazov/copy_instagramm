import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { StateSchema } from './stateSchema'

const rootStore: ReducersMapObject<StateSchema> = {}

export const store = configureStore({
  reducer: rootStore,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
