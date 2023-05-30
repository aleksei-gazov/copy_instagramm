import cls from './LoginPage.module.scss'

import { LoginForm } from 'features/login/ui/LoginForm'
import { getLayout } from 'widgets/Layout/Layout'

const LoginPage = () => {
  return (
    <div className={cls.Login}>
      <LoginForm />
    </div>
  )
}

LoginPage.getLayout = getLayout
export default LoginPage
