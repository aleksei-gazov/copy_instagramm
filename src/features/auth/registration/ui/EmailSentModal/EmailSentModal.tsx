import Image from 'next/image'

import CloseIcon from '../../../../../../public/icon/close.svg'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Portal } from 'shared/ui/Portal/Portal'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

type EmailSentModalType = {
  isOpen: boolean
  setOn: (value: boolean) => void
  title: string
  email: string
}

export const EmailSentModal = ({ isOpen, title, setOn, email }: EmailSentModalType) => {
  if (!isOpen) return null

  const handleButtonClick = () => {
    setOn(false)
  }

  return (
    <Portal>
      <div>
        <div>
          <Text tag={'h2'} font={TextFontTheme.INTER_BOLD_XL} color={TextColorTheme.LIGHT}>
            {title}
          </Text>
          <Button theme={ButtonTheme.Clear} onClick={handleButtonClick}>
            <Image src={CloseIcon} alt={'close'} />
          </Button>
        </div>
        <div>We have sent a link to confirm your email to {email}</div>
        <div>
          <Button theme={ButtonTheme.PRIMARY} onClick={handleButtonClick}>
            OK
          </Button>
        </div>
      </div>
    </Portal>
  )
}
