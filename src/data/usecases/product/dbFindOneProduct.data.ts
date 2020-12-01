import { IProductFindOneRepository } from "@/data/protocols/db/product/findOneProductRepository.interface";
import { IDbFindOneProduct, IDbFindOneProductResult } from "@/domain/usecases/product/findOneProduct.interface";

export class DbFindOneProduct implements IDbFindOneProduct {
  constructor (
    private readonly productFindOneRepository: IProductFindOneRepository
  ) {}

  async findOne(id: number): Promise<IDbFindOneProductResult[]> {
    return await this.productFindOneRepository.findOne(id)
  }

}
