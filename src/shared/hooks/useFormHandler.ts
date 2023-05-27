import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

type KeysType = 'email' | 'password' | 'name' | 'confirmPassword' | 'loginPassword'

const getErrorMessage = (errors: Record<string, any>, key: string): string | undefined => {
  return errors[key] ? errors[key].message : undefined
}

const validKeys = ['email', 'password', 'name', 'confirmPassword', 'loginPassword']
const schemaParam = {
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6).max(20),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords does not match'),
  loginPassword: Yup.string().required(),
}

/**
 @param {KeysType[]} keys - An array of strings representing the form fields to be validated.

 @returns {Object}: object with methods and properties for handling form
 validation and submission using Yup and React Hook Form

 - register: A function to register the form fields with React Hook Form.
 - handleSubmit: A function to handle form submission.
 - reset: A function to reset the form to its initial state.
 - isValid: A boolean indicating whether the form is currently valid or not.
 - error + name fields: A string containing the error message for the email field, if any.

 @throws {Error} Throws an error if an invalid key is detected in the keys array.
 */

export const useFormHandler = (...keys: KeysType[]) => {
  const param: Record<string, Yup.StringSchema> = {}

  if (keys.some(key => !validKeys.includes(key))) {
    throw new Error(`Invalid key detected. Valid keys are ${validKeys.join(', ')}.`)
  }

  Object.entries(schemaParam).forEach(([key, schema]) => {
    param[key] = schema
  })

  const formSchema = Yup.object().shape(param)

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(formSchema), mode: 'all' })

  const errorEmail = getErrorMessage(errors, 'email')
  const errorPassword = getErrorMessage(errors, 'password')

  return {
    register,
    handleSubmit,
    reset,
    isValid,
    errorEmail,
    errorPassword,
  }
}
