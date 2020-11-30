import { IFindUserIdRepository } from "@/data/protocols/db/company/findUserIdRepository.interface";
import { IDbDeleteProduct, IDbDeleteProductDTO, IDbDeleteProductResult } from "@/domain/usecases/product/deleteProduct.interface";

export class DbDeleteProduct implements IDbDeleteProduct {
  constructor (
    private readonly findUserIdRepository: IFindUserIdRepository
  ) {}

  async delete(data: IDbDeleteProductDTO): Promise<IDbDeleteProductResult> {

    await this.findUserIdRepository.findUserId(data.user)

    return await null
  }

}

