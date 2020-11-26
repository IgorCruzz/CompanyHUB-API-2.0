
export interface ISignInDTO {
  email: string
  password: string
}

export interface ISignInResult {
  id: string
  name: string
  token: string
}

export interface ISignIn {
  signIn (data: ISignInDTO): Promise<ISignInResult>
}
