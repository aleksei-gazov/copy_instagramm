import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UploadPhotoSchema } from '../types/uploadPhotoSchema'

const uploadPhotoSlice = createSlice({
  name: 'uploadPhoto',
  initialState: { step: 0, imagesAvatar: [] as string[] } as UploadPhotoSchema,
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
    setImagesAvatar: (state, action: PayloadAction<string | string[]>) => {
      if (typeof action.payload === 'string') {
        state.imagesAvatar.push(action.payload)
      } else {
        state.imagesAvatar = [...state.imagesAvatar, ...action.payload]
      }
    },
    setClearImagesAvatar: state => {
      state.imagesAvatar.length = 0
    },
    deleteAvatar: (state, action: PayloadAction<string>) => {
      const curIndex = state.imagesAvatar.findIndex(el => el === action.payload)

      if (curIndex) {
        state.imagesAvatar.splice(curIndex, 1)
      }
    },
  },
})

export const { reducer: uploadPhotoReducer } = uploadPhotoSlice
export const {
  setImage,
  setCloseModal,
  setStep,
  setImagesAvatar,
  setClearImagesAvatar,
  deleteAvatar,
} = uploadPhotoSlice.actions
