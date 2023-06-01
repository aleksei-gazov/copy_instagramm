import { LoginSchema } from '../features/auth/login'

import { baseAPI } from 'shared/api/baseAPI'

export interface StateSchema {
  [baseAPI.reducerPath]: ReturnType<typeof baseAPI.reducer>
  login: LoginSchema
}
