
export interface IAuthorizationResult {
  id?: string
  error?: string
}

export interface IAuthorization {
  auth (data: any): Promise<IAuthorizationResult>
}
