export type ConfirmationRequestType = {
  confirmationCode: string | string[] | undefined
}
export type ConfirmationResponseType = {
  statusCode: number
  messages: MessagesType[]
  error: string
}
type MessagesType = {
  message: string
  field: string
}
