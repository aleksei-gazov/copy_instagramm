import {
  ConfirmationRequestType,
  ConfirmationResponseType,
} from 'features/registration-confirmation/service/types'
import { baseAPI } from 'shared/api/baseAPI'

export const confirmation = baseAPI.injectEndpoints({
  endpoints: build => ({
    confirm: build.mutation<ConfirmationResponseType, ConfirmationRequestType>({
      query: ({ confirmationCode }) => ({
        url: `/api/auth/registration-confirmation?code=${confirmationCode}`,
        method: 'post',
      }),
    }),
  }),
})

export const { useConfirmMutation } = confirmation
