export interface IDeleteUserRepository {
   delete (id: number): Promise<boolean>
}
