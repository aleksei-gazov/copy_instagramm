import Confirmation from 'features/registration-confirmation/ui/Confirmation'
import cls from 'pages/registration-confirmation/RegistrationConfirmation.module.scss'
import { getLayout } from 'widgets/Layout/Layout'

const RegistrationConfirmation = () => {
  return (
    <div className={cls.registration_container}>
      <Confirmation />
    </div>
  )
}

RegistrationConfirmation.getLayout = getLayout
export default RegistrationConfirmation
