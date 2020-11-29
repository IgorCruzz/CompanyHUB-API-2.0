import { Products } from '@/infra/db/typeorm/entities/Products.entity'

export interface IDbFindAllCompanyResult {
  error?: string
  user_id?: number
  cnpj?: string
  id?: number
  productConnection?: Products[]
  name?: string
}

export interface IDbFindAllCompany {
  findAll (): Promise<IDbFindAllCompanyResult>
}
