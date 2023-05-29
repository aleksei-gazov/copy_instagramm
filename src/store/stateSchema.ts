import { LoginSchema } from 'features/login'
import { baseAPI } from 'shared/api/baseAPI'

export interface StateSchema {
  [baseAPI.reducerPath]: ReturnType<typeof baseAPI.reducer>
  login: LoginSchema
}
