export interface IAuthenticateMailDTO {
  name: string
  email: string
  token: string
}

export interface IAuthenticateMail {
  authenticateUser(data: IAuthenticateMailDTO): Promise<void>
}
