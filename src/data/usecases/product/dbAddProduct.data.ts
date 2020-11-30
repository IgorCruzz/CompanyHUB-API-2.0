import { IFindUserIdRepository } from "@/data/protocols/db/company/findUserIdRepository.interface";
import { IFindByProductNameRepository } from "@/data/protocols/db/product/findByNameProductRepository.interface";
import { IAddProduct, IAddProductDTO, IAddProductResult } from "@/domain/usecases/product/addProductinterface";

export class DbAddProduct implements IAddProduct {
  constructor (
    private readonly findUserIdRepository: IFindUserIdRepository,
    private readonly findByProductNameRepository: IFindByProductNameRepository
  ) {}

  async add(data: IAddProductDTO): Promise<IAddProductResult> {

    const company = await this.findUserIdRepository.findUserId(Number(data.user))

    if (company.id !== data.company_id) return { error: 'Você não tem permissão para cadastrar um produto em outra empresa.'}

    const productName = await this.findByProductNameRepository.findName(data.name)

    if(productName) return { error: 'Este nome ja está em uso, escolha outro.' }

    return await null
  }
}

