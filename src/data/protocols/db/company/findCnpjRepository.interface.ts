import { ICompanyModel } from '@/domain/models/company.interface'

export interface IFindCnpjRepository {
  findCnpj(cnpj: string): Promise<ICompanyModel>
}
