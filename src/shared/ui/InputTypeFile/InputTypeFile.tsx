import React, { ChangeEvent, useRef } from 'react'

import cls from './InputTypeFile.module.scss'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'

export const InputTypeFile = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const selectFileHandler = () => {
    inputRef && inputRef.current?.click()
  }

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      console.log('file: ', file)
    }
  }

  return (
    <div>
      <Button theme={ButtonTheme.PRIMARY} onClick={selectFileHandler} className={cls.btn}>
        Select from Computer
      </Button>
      <input style={{ display: 'none' }} ref={inputRef} type="file" onChange={uploadHandler} />
    </div>
  )
}
