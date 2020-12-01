import { IProductModel } from '@/domain/models/product.interface'

export interface IProductFindAllRepository {
  findAll(): Promise<IProductModel[]>
}
