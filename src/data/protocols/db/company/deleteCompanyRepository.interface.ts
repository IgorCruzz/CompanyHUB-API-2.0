export interface IDeleteCompanyRepository {
   delete (id: number): Promise<boolean>
}
