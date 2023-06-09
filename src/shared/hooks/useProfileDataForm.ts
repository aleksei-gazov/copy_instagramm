import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import * as Yup from 'yup'

const userProfileDataFormSchema = yup.object().shape({
  userName: Yup.string().required().min(6).max(30),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  dateOfBirth: Yup.string().required(),
  city: Yup.string().required(),
  aboutMe: Yup.string().required(),
})

type FormData = yup.InferType<typeof userProfileDataFormSchema>

export const useProfileDataForm = () => {
  return useForm<FormData>({
    mode: 'onSubmit',
    defaultValues: {
      userName: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      city: '',
      aboutMe: '',
    },
    resolver: yupResolver(userProfileDataFormSchema),
  })
}
