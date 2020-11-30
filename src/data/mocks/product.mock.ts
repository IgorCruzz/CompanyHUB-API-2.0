import { IProductModel } from "@/domain/models/product.interface";
import { ICreateProductDTO, ICreateProductRepository } from "../protocols/db/product/createProductRepository.interface";
import { IFindByProductNameRepository } from "../protocols/db/product/findByNameProductRepository.interface";


export class FindByProductNameRepositoryStub implements IFindByProductNameRepository {
  async findName (name: string): Promise<IProductModel> {
    return Promise.resolve({
      id: 1,
      company_id: 1,
      name: 'product',
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
}

export class CreateProductRepositoryStub implements ICreateProductRepository {
  async create(date: ICreateProductDTO): Promise<IProductModel> {
    return Promise.resolve({
      id: 1,
      company_id: 1,
      name: 'product',
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
}
