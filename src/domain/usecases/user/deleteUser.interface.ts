export interface IDeleteResult {
  error?: string
  deleted?: boolean
}

export interface IDeleteUser {
  delete(id: number): Promise<IDeleteResult>
}
