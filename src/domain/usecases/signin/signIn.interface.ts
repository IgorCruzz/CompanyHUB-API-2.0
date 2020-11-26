
export interface ISignInDTO {
  email: string
  password: string
}

export interface ISignInResult {
  id: number
  name: string
  token: string
  email: string
}

export interface ISignIn {
  signIn (data: ISignInDTO): Promise<ISignInResult>
}
