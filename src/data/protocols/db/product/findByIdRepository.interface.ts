import { IProductModel } from '@/domain/models/product.interface'

export interface IFindByIdRepository {
  findId(id: number): Promise<IProductModel>
}
