import cls from './LoginPage.module.scss'

import { LoginForm } from 'features/login/ui/LoginForm'
import { useDeleteQuery } from 'shared/api/delete'
import { useRefreshTokenMutation } from 'shared/api/updateToken'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { getLayout } from 'widgets/Layout/Layout'

const LoginPage = () => {
  const {} = useDeleteQuery()

  return (
    <div className={cls.Login}>
      <LoginForm />
      <Button theme={ButtonTheme.PRIMARY} size={ButtonSize.XXl}>
        проверочки
      </Button>
    </div>
  )
}

LoginPage.getLayout = getLayout
export default LoginPage
