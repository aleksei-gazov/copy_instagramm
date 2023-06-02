import { PasswordRecovery } from 'features/auth/passwordRecovery/ui/PasswordRecovery'
import s from 'pages/auth/passwordRecovery/PasswordRecovery.module.scss'
import { getLayout } from 'widgets/Layout/Layout'

const PassWordRecoveryPage = () => {
  return (
    <div className={s.PassWordRecovery}>
      <PasswordRecovery />
    </div>
  )
}

PassWordRecoveryPage.getLayout = getLayout
export default PassWordRecoveryPage
