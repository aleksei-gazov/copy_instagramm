import cls from './RegistrationPage.module.scss'

import { RegistrationForm } from 'features/registration/ui/RegistrationForm'
import { getLayout } from 'widgets/Layout/Layout'

const RegistrationPage = () => {
  return (
    <div className={cls.registration_container}>
      <RegistrationForm />
    </div>
  )
}

RegistrationPage.getLayout = getLayout
export default RegistrationPage
