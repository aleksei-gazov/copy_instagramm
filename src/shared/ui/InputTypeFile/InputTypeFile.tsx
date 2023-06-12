import React, { ChangeEvent, useRef } from 'react'

import cls from './InputTypeFile.module.scss'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'

type InputTypeFileProps = {
  setSelectedImage: (image: File) => void
}

export const InputTypeFile = ({ setSelectedImage }: InputTypeFileProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const selectFileHandler = () => {
    inputRef && inputRef.current?.click()
  }

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      setSelectedImage(file)
    }
  }

  return (
    <div>
      <Button theme={ButtonTheme.PRIMARY} onClick={selectFileHandler} className={cls.btn}>
        Select from Computer
      </Button>
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        type="file"
        onChange={uploadHandler}
        accept="image/png, image/jpeg, image/jpg"
      />
    </div>
  )
}
