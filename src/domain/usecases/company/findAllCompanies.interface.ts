import { IProductModel } from '@/domain/models/product.interface'

export interface IFindAllCompanyResult {
  error?: string
  user_id?: number
  cnpj?: string
  id?: number
  productConnection?: IProductModel[]
  name?: string
}

export interface IFindAllCompany {
  findAll(): Promise<IFindAllCompanyResult[]>
}
