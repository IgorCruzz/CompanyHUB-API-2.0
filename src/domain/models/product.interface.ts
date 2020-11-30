import { ICompanyModel } from './company.interface'
import { IServiceModel } from './service.interface'

export interface IProductModel {
  id: number
  name: string
  company_id: number
  companyConnection?: ICompanyModel
  serviceConnection?: IServiceModel[]
  created_at: Date
  updated_at: Date
}
