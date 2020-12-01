import { IProductFindAllRepository } from "@/data/protocols/db/product/findAllProductsRepository.interface";
import { IDbFindAllProducts, IDbFindAllProductsResult } from "@/domain/usecases/product/findAllProduct.interface";

export class DbFindAllProducts implements IDbFindAllProducts {
  constructor (
    private readonly productFindAllRepository: IProductFindAllRepository
  ) {}

  async findAll(): Promise<IDbFindAllProductsResult[]> {
    return await this.productFindAllRepository.findAll()
  }

}
