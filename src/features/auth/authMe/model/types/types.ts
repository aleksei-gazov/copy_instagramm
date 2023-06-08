export interface AuthMeSchema {
  authMeData: {
    userId: number | null
    userName: string | undefined
    email: string | undefined
  }
}
