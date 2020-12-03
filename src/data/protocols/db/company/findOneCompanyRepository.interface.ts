import { ICompanyModel } from '@/domain/models/company.interface'

export interface IFindOneCompanyRepository {
  findOne(id: number): Promise<ICompanyModel>
}
