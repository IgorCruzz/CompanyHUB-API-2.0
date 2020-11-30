import { IDbFindAllProducts, IDbFindAllProductsResult } from "@/domain/usecases/product/findAllProduct.interface";

export class DbFindAllProducts implements IDbFindAllProducts {
  async findAll(): Promise<IDbFindAllProductsResult[]> {
    return await null
  }

}
