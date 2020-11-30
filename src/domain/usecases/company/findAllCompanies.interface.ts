import { IProductModel } from '@/domain/models/product.interface'

export interface IDbFindAllCompanyResult {
  error?: string
  user_id?: number
  cnpj?: string
  id?: number
  productConnection?: IProductModel[]
  name?: string
}

export interface IDbFindAllCompany {
  findAll(): Promise<IDbFindAllCompanyResult[]>
}
