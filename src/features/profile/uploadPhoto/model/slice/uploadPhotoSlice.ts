import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UploadPhotoSchema } from '../types/uploadPhotoSchema'

const uploadPhotoSlice = createSlice({
  name: 'uploadPhoto',
  initialState: { step: 0, description: '' } as UploadPhotoSchema,
  reducers: {
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload
    },
    setCloseModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
    setDescriptionPost: (state, action: PayloadAction<string>) => {
      state.description = action.payload
    },
  },
})

export const { reducer: uploadPhotoReducer } = uploadPhotoSlice
export const { setImage, setCloseModal, setStep, setDescriptionPost } = uploadPhotoSlice.actions
