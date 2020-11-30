import { IFindUserIdRepository } from "@/data/protocols/db/company/findUserIdRepository.interface";
import { IAddProduct, IAddProductDTO, IAddProductResult } from "@/domain/usecases/product/addProductinterface";

export class DbAddProduct implements IAddProduct {
  constructor (
    private readonly FindUserIdRepository: IFindUserIdRepository
  ) {}

  async add(data: IAddProductDTO): Promise<IAddProductResult> {

    const company = await this.FindUserIdRepository.findUserId(Number(data.user))

    if (company.id !== data.company_id) return { error: 'Você não tem permissão para cadastrar um produto em outra empresa.'}


    return await null
  }
}

