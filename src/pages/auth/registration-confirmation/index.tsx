import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useRegistrationConfirmationMutation } from 'features/auth/registration-confirmation/service/registrationConfirmation'
import Confirmation from 'features/auth/registration-confirmation/ui/Confirmation'
import cls from 'pages/auth/registration-confirmation/RegistrationConfirmation.module.scss'
import { getLayout } from 'widgets/Layout/Layout'

const RegistrationConfirmation = () => {
  const [confirm] = useRegistrationConfirmationMutation()

  const router = useRouter()

  const token = router.query.code

  useEffect(() => {
    if (typeof token === 'string') {
      confirm({ confirmationCode: token })
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
