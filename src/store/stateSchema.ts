import { baseAPI } from 'shared/api/baseAPI'

export interface StateSchema {
  [baseAPI.reducerPath]: ReturnType<typeof baseAPI.reducer>
}
