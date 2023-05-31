import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useConfirmMutation } from 'features/registration-confirmation/service/confirmation'
import Confirmation from 'features/registration-confirmation/ui/Confirmation'
import cls from 'pages/registration-confirmation/RegistrationConfirmation.module.scss'
import { getLayout } from 'widgets/Layout/Layout'

const RegistrationConfirmation = () => {
  const router = useRouter()
  const code = router.query.code
  const [confirmation] = useConfirmMutation()

  useEffect(() => {
    if (code) {
      confirmation({ confirmationCode: code })
    }
  }, [])

  return (
    <div className={cls.registration_container}>
      <Confirmation />
    </div>
  )
}

RegistrationConfirmation.getLayout = getLayout
export default RegistrationConfirmation
