import { IProductFindOneRepository } from '@/data/protocols/db/product/findOneProductRepository.interface'
import {
  IFindOneProduct,
  IFindOneProductResult,
} from '@/domain/usecases/product/findOneProduct.interface'

export class DbFindOneProduct implements IFindOneProduct {
  constructor(
    private readonly productFindOneRepository: IProductFindOneRepository
  ) {}

  async findOne(id: number): Promise<IFindOneProductResult[]> {
    return await this.productFindOneRepository.findOne(id)
  }
}
