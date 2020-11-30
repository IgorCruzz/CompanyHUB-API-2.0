import { IProductModel } from './product.interface'

export interface IServiceModel {
  id: number
  name: string
  description: string
  product_id: number
  productConnection?: IProductModel
  created_at: Date
  updated_at: Date
}
