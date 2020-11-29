import { Products } from '@/infra/db/typeorm/entities/Products.entity'

export interface IDbFindOneCompanyResult {
  error?: string
  user_id?: number
  cnpj?: string
  id?: number
  productConnection?: Products[]
  name?: string
}

export interface IDbFindOneCompany {
  findOne(id: string): Promise<IDbFindOneCompanyResult>
}
