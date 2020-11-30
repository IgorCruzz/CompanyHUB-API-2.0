import { IProductModel } from './product.interface'
import { IUserModel } from './user.interface'

export interface ICompanyModel {
  id: number
  name: string
  cnpj: string
  user_id?: number
  user?: IUserModel
  productConnection?: IProductModel[]
  created_at: Date
  updated_at: Date
}
