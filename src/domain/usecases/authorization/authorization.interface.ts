export interface IDbAuthorizationResult {
  id?: string
  error?: string
}

export interface IDbAuthorizationDTO {
  token: string
  params: { id: string }
  role: boolean
}

export interface IDbAuthorization {
  auth(data: any): Promise<IDbAuthorizationResult>
}
