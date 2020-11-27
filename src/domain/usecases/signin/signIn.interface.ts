
export interface ISignInDTO {
  email: string
  password: string
}

export interface ISignInResult {
  id?: number
  name?: string
  administrator?: boolean
  token?: string
  email?: string
  error?: string
}

export interface ISignIn {
  signIn (data: ISignInDTO): Promise<ISignInResult>
}
