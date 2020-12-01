import { IProductModel } from '@/domain/models/product.interface'

export interface IProductFindOneRepository {
  findOne(id: number): Promise<IProductModel[]>
}
