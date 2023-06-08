import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LoaderSchema } from '../types/LoaderSchema'

const loaderSlice = createSlice({
  name: 'loader',
  initialState: { isLoading: false } as LoaderSchema,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { setLoading } = loaderSlice.actions

export const { reducer: loaderReducer } = loaderSlice
