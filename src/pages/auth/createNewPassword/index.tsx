import { CreateNewPasswordForm } from 'features/auth/createNewPassword/ui/CreateNewPassword'
import s from 'pages/auth/createNewPassword/CreateNewPassword.module.scss'
import { getLayout } from 'widgets/Layout/Layout'

const CreateNewPasswordPage = () => {
  return (
    <div className={s.PassWordRecovery}>
      <CreateNewPasswordForm />
    </div>
  )
}

CreateNewPasswordPage.getLayout = getLayout
export default CreateNewPasswordPage
