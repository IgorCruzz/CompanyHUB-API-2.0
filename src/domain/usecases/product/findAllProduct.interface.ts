import { ICompanyModel } from '@/domain/models/company.interface'
import { IServiceModel } from '@/domain/models/service.interface'

export interface IFindAllProductsResult {
  error?: string
  id?: number
  name?: string
  company_id?: number
  companyConnection?: ICompanyModel
  serviceConnection?: IServiceModel[]
}

export interface IFindAllProducts {
  findAll(): Promise<IFindAllProductsResult[]>
}
