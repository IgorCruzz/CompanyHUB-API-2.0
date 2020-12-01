
export interface IDeleteServiceRepository {
  delete(id: number): Promise<boolean>
}
