import { IProductModel } from '@/domain/models/product.interface'

export interface IFindOneCompanyResult {
  error?: string
  user_id?: number
  cnpj?: string
  id?: number
  productConnection?: IProductModel[]
  name?: string
}

export interface IFindOneCompany {
  findOne(id: string): Promise<IFindOneCompanyResult>
}
