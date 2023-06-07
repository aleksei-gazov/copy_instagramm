import React from 'react'

type SelectedImageType = {
  selectedImage: File
}

export const SelectedImage = ({ selectedImage }: SelectedImageType) => {
  return (
    <div>
      <img
        alt="not found"
        width={'332px'}
        height={'340px'}
        src={URL.createObjectURL(selectedImage)}
      />
    </div>
  )
}
