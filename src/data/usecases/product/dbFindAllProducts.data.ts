import { IProductFindAllRepository } from "@/data/protocols/db/product/findAllProductsRepository.interface";
import { IFindAllProducts, IFindAllProductsResult } from "@/domain/usecases/product/findAllProduct.interface";

export class DbFindAllProducts implements IFindAllProducts {
  constructor (
    private readonly productFindAllRepository: IProductFindAllRepository
  ) {}


  async findAll(): Promise<IFindAllProductsResult[]> {
    return await this.productFindAllRepository.findAll()
  }

}
