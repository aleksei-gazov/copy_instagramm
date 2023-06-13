import { ChangeEvent, useState } from 'react'

import cls from './SliderRange.module.scss'

type PropsType = {
  scale: number
  onScale: (scale: number) => void
}

export const SliderRange = ({ scale, onScale }: PropsType) => {
  const [value, setValue] = useState('1')

  const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onScale(+e.currentTarget.value)
  }

  return (
    <input type={'range'} value={scale} onChange={handlerOnChange} min={1} max={2} step={0.1} />
  )
}
