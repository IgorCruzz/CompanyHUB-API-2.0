import { IProductModel } from '@/domain/models/product.interface'
import {
  ICreateProductDTO,
  ICreateProductRepository,
} from '../protocols/db/product/createProductRepository.interface'
import { IDeleteProductRepository } from '../protocols/db/product/deleteProductRepository.interface'
import { IProductFindAllRepository } from '../protocols/db/product/findAllProductsRepository.interface'
import { IFindByIdRepository } from '../protocols/db/product/findByIdRepository.interface'
import { IFindByProductNameRepository } from '../protocols/db/product/findByNameProductRepository.interface'
import {
  IFindByProductCompanyId,
  IFindByProductCompanyIdDTO,
} from '../protocols/db/product/findByProductCompanyIdRepository.interface'
import { IProductFindOneRepository } from '../protocols/db/product/findOneProductRepository.interface'
import {
  IUpdateProductDTO,
  IUpdateProductRepository,
} from '../protocols/db/product/updateProductRepository.interface'

export class FindByProductNameRepositoryStub
  implements IFindByProductNameRepository {
  async findName(name: string): Promise<IProductModel> {
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

export class DeleteProductRepositoryStub implements IDeleteProductRepository {
  async delete(id: number): Promise<boolean> {
    return Promise.resolve(true)
  }
}

export class UpdateProductRepositoryStub implements IUpdateProductRepository {
  update(id: number, data: IUpdateProductDTO): Promise<boolean> {
    return Promise.resolve(true)
  }
}

export class FindByIdRepositoryStub implements IFindByIdRepository {
  async findId(id: number): Promise<IProductModel> {
    return Promise.resolve({
      id: 1,
      company_id: 1,
      name: 'product',
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
}

export class FindAllProductsRepositoryStub
  implements IProductFindAllRepository {
  async findAll(): Promise<IProductModel[]> {
    return Promise.resolve([
      {
        id: 1,
        name: 'product',
        company_id: 1,
        companyConnection: {
          user_id: 1,
          cnpj: '11111111111',
          id: 1,
          productConnection: [],
          name: 'company',
          created_at: new Date(),
          updated_at: new Date(),
        },
        serviceConnection: [],
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  }
}

export class ProductFindOneRepositoryStub implements IProductFindOneRepository {
  async findOne(id: number): Promise<IProductModel[]> {
    return Promise.resolve([
      {
        id: 1,
        name: 'product',
        company_id: 1,
        companyConnection: {
          user_id: 1,
          cnpj: '11111111111',
          id: 1,
          productConnection: [],
          name: 'company',
          created_at: new Date(),
          updated_at: new Date(),
        },
        serviceConnection: [],
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  }
}

export class FindByProductCompanyIdStub implements IFindByProductCompanyId {
  async findProductCompanyId(
    data: IFindByProductCompanyIdDTO
  ): Promise<IProductModel> {
    return Promise.resolve({
      id: 1,
      company_id: 1,
      name: 'product',
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
}
