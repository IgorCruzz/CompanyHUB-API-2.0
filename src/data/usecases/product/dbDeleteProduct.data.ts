import { IFindUserIdRepository } from "@/data/protocols/db/company/findUserIdRepository.interface";
import { IDeleteProductRepository } from "@/data/protocols/db/product/deleteProductRepository.interface";
import { IFindByIdRepository } from "@/data/protocols/db/product/findByIdRepository.interface";
import { IDeleteProduct, IDeleteProductDTO, IDeleteProductResult } from "@/domain/usecases/product/deleteProduct.interface";

export class DbDeleteProduct implements IDeleteProduct {
  constructor (
    private readonly findUserIdRepository: IFindUserIdRepository,
    private readonly findByIdRepository: IFindByIdRepository,
    private readonly deleteProductRepository: IDeleteProductRepository
  ) {}

  async delete(data: IDeleteProductDTO): Promise<IDeleteProductResult> {

   const company =  await this.findUserIdRepository.findUserId(data.user)

    if(company.id !== data.company_id) return { error: 'Você não tem permissão para deletar um produto em outra empresa.'}

    const product = await this.findByIdRepository.findId(data.params.id)

    if(!product) return { error: 'Insira um ID valido.'}


    const deleted = await this.deleteProductRepository.delete(data.params.id)

    return { deleted }
  }

}

