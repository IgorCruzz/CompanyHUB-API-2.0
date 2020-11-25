
export interface IDeleteUser {
  delete (id: number): Promise<boolean>
}
