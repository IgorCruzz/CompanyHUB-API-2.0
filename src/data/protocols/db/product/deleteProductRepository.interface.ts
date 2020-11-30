export interface IDeleteProductRepository {
  delete(id: number): Promise<boolean>
}
