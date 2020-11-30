export interface IAuthorizationResult {
  id?: string
  error?: string
}

export interface IAuthorizationDTO {
  token: string
  params: { id: string }
  role: boolean
}

export interface IAuthorization {
  auth(data: any): Promise<IAuthorizationResult>
}
