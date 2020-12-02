import { ICompanyModel } from '@/domain/models/company.interface';

export interface ICreateCompanyDTO {
  name: string
  cnpj: string
  user_id: number
}

export interface ICreateCompanyRepository {
  create(date: ICreateCompanyDTO): Promise<ICompanyModel>
}
