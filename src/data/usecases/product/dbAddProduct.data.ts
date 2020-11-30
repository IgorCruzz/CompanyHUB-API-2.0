import { IFindUserIdRepository } from "@/data/protocols/db/company/findUserIdRepository.interface";
import { ICreateProductRepository } from "@/data/protocols/db/product/createProductRepository.interface";
import { IFindByProductNameRepository } from "@/data/protocols/db/product/findByNameProductRepository.interface";
import { IAddProduct, IAddProductDTO, IAddProductResult } from "@/domain/usecases/product/addProductinterface";

export class DbAddProduct implements IAddProduct {
  constructor (
    private readonly findUserIdRepository: IFindUserIdRepository,
    private readonly findByProductNameRepository: IFindByProductNameRepository,
    private readonly createProductRepository: ICreateProductRepository
  ) {}

  async add(data: IAddProductDTO): Promise<IAddProductResult> {

    const company = await this.findUserIdRepository.findUserId(Number(data.user))

    if (company.id !== data.company_id) return { error: 'Você não tem permissão para cadastrar um produto em outra empresa.'}

    const productName = await this.findByProductNameRepository.findName(data.name)

    if(productName) return { error: 'Este nome já está em uso, escolha outro.' }

    const product = await this.createProductRepository.create({
      name: data.name,
      company_id: data.company_id
    })

    return product
  }
}

