import { PropsWithChildren } from 'react'

import cls from './modal.module.scss'

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Portal } from 'shared/ui/Portal/Portal'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

type ModalType = {
  active: boolean
  title: string
  onSubmit: () => void
  onClose: () => void
}

export const Modal = ({
  active,
  onClose,
  onSubmit,
  title,
  children,
}: PropsWithChildren<ModalType>) => {
  // const portalElement = document.getElementById('__next')

  if (!active) {
    return null
  }

  return (
    <Portal>
      <div className={cls.modal} onClick={onClose}>
        <div className={cls.modalContent} onClick={e => e.stopPropagation()}>
          <div className={cls.modalHeader}>
            <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
              {title}
            </Text>
            <button onClick={onClose}>X</button>
          </div>
          <div className={cls.modalBody}>{children}</div>
          <div className={cls.modalFooter}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onSubmit} size={ButtonSize.XS}>
              Yes
            </Button>
            <Button theme={ButtonTheme.OUTLINE} onClick={onClose} size={ButtonSize.XS}>
              No
            </Button>
          </div>
        </div>
      </div>
    </Portal>
  )
}
