import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { StateSchema } from './stateSchema'

import { baseAPI } from 'shared/api/baseAPI'

const rootStore: ReducersMapObject<StateSchema> = {
  [baseAPI.reducerPath]: baseAPI.reducer,
}

export const store = configureStore({
  reducer: rootStore,
  middleware: gDM => gDM().concat(baseAPI.middleware),
})

setupListeners(store.dispatch)
