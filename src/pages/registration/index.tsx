import { useState } from 'react'

import cls from './RegistrationPage.module.scss'

import { EmailSentModal } from 'features/auth/registration/ui/EmailSentModal/EmailSentModal'
import { RegistrationForm } from 'features/auth/registration/ui/RegistrationForm/RegistrationForm'
import { getLayout } from 'widgets/Layout/Layout'

const RegistrationPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div className={cls.registration_container}>
      {!isModalOpen && <RegistrationForm setIsModalOpen={setIsModalOpen} />}
      <EmailSentModal
        isOpen={isModalOpen}
        setOn={setIsModalOpen}
        title={'Email sent'}
        email={'email'}
      />
    </div>
  )
}

RegistrationPage.getLayout = getLayout
export default RegistrationPage
