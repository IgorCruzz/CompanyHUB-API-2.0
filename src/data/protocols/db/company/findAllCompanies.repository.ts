import { ICompanyModel } from '@/domain/models/company.interface'

export interface IFindAllCompaniesRepository {
  findAll(): Promise<ICompanyModel[]>
}
