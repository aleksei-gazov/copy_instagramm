import { LoginSchema } from 'features/auth/login'
import { RegistrationSchema } from 'features/auth/registration/model/types/RegistrationSchema'
import { baseAPI } from 'shared/api/baseAPI'

export interface StateSchema {
  [baseAPI.reducerPath]: ReturnType<typeof baseAPI.reducer>
  login: LoginSchema
  registration: RegistrationSchema
}
