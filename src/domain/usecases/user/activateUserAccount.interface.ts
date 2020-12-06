export interface IActivateUserAccountResult {
  error?: string
  updated?: boolean
}

export interface IActivateUserAccount {
  activate(token: string): Promise<IActivateUserAccountResult>
}
