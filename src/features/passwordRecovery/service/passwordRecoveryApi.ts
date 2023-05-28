import { LoginParamsType } from 'features/login/authByEmail/service/types'
import { baseAPI } from 'shared/api/baseAPI'

export const passwordRecoveryAPI = baseAPI.injectEndpoints({
    endpoints: build => ({
        passwordRecovery: build.query<PasswordRecoveryParamsType, void>({
            query: arg => ({
                url: `/api/auth/password-recovery`,
                method: 'Post',
                body: arg,
            }),
        }),
    }),
})
