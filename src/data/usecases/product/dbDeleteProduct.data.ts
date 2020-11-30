import { IDbDeleteProduct, IDbDeleteProductDTO, IDbDeleteProductResult } from "@/domain/usecases/product/deleteProduct.interface";

export class DbDeleteProduct implements IDbDeleteProduct {
  constructor () {}

  async delete(data: IDbDeleteProductDTO): Promise<IDbDeleteProductResult> {
    return await null
  }

}

