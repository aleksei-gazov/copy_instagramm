import s from './PasswordRecovery.module.scss'

import { PasswordRecovery } from 'features/auth/passwordRecovery/ui/PasswordRecovery'
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
