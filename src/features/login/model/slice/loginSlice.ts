import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { LoginSchema } from '../types/LoginSchema'

const initialState: LoginSchema = {
  accessToken: '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToken } = loginSlice.actions

export const { reducer: loginReducer } = loginSlice
