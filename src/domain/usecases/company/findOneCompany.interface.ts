import { IProductModel } from '@/domain/models/product.interface'

export interface IDbFindOneCompanyResult {
  error?: string
  user_id?: number
  cnpj?: string
  id?: number
  productConnection?: IProductModel[]
  name?: string
}

export interface IDbFindOneCompany {
  findOne(id: string): Promise<IDbFindOneCompanyResult>
}
