import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useRegistrationConfirmationMutation } from 'features/auth/registration-confirmation/service/registrationConfirmation'
import { Confirmation } from 'features/auth/registration-confirmation/ui/Confirmation/Confirmation'
import cls from 'pages/auth/registration-confirmation/RegistrationConfirmation.module.scss'
import { Loader } from 'shared/ui/Loader/Loader'
import { getLayout } from 'widgets/Layout/Layout'

const RegistrationConfirmation = () => {
  const [confirm, { isLoading }] = useRegistrationConfirmationMutation()

  const router = useRouter()

  const token = router.query.code

  if (isLoading) return <Loader />

  useEffect(() => {
    if (typeof token === 'string') {
      confirm({ confirmationCode: token })
        .unwrap()
        .catch(() => {
          // alternative scenarios
        })
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
