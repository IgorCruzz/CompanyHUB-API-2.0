import { IProductModel } from '@/domain/models/product.interface'

export interface ICreateProductDTO {
  name: string
  company_id: number
}

export interface ICreateProductRepository {
  create(date: ICreateProductDTO): Promise<IProductModel>
}
