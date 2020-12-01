import { ICompanyModel } from '@/domain/models/company.interface'
import { IServiceModel } from '@/domain/models/service.interface'

export interface IDbFindAllProductsResult {
  error?: string
  id?: number
  name?: string
  company_id?: number
  companyConnection?: ICompanyModel
  serviceConnection?: IServiceModel[]
}

export interface IDbFindAllProducts {
  findAll(): Promise<IDbFindAllProductsResult[]>
}
