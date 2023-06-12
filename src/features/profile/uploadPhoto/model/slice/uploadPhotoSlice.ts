import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UploadPhotoSchema } from '../types/uploadPhotoSchema'

const uploadPhotoSlice = createSlice({
  name: 'uploadPhoto',
  initialState: {} as UploadPhotoSchema,
  reducers: {
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload
    },
    setCloseModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
  },
})

export const { reducer: uploadPhotoReducer } = uploadPhotoSlice
export const { setImage, setCloseModal } = uploadPhotoSlice.actions
