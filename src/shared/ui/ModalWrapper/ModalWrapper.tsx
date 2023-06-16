import { FC, memo, MouseEvent, ReactNode } from 'react'

import Close from '../../../../public/icon/close.svg'

import cls from './ModalWrapper.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Portal } from 'shared/ui/Portal/Portal'

interface ModalWrapperProps {
  callback: () => void
  isOpen: boolean
  children: ReactNode
}

export const ModalWrapper: FC<ModalWrapperProps> = memo(({ callback, isOpen, children }) => {
  const onClickContentHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const mods = {
    [cls.opened]: isOpen,
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [])}>
        <Button className={cls.closeIcon} onClick={callback} theme={ButtonTheme.Clear}>
          <Close width={16} heigth={16} />
        </Button>
        <div onClick={callback} className={cls.overlay}>
          <div onClick={onClickContentHandler}>{children}</div>
        </div>
      </div>
    </Portal>
  )
})
