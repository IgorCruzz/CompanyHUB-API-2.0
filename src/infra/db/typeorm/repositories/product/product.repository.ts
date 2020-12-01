import { ICreateProductDTO, ICreateProductRepository } from '@/data/protocols/db/product/createProductRepository.interface'
import { IDeleteProductRepository } from '@/data/protocols/db/product/deleteProductRepository.interface'
import { IProductFindAllRepository } from '@/data/protocols/db/product/findAllProductsRepository.interface'
import { IFindByIdRepository } from '@/data/protocols/db/product/findByIdRepository.interface'
import { IFindByProductNameRepository } from '@/data/protocols/db/product/findByNameProductRepository.interface'
import { IFindByProductCompanyId, IFindByProductCompanyIdDTO } from '@/data/protocols/db/product/findByProductCompanyIdRepository.interface'
import { IProductFindOneRepository } from '@/data/protocols/db/product/findOneProductRepository.interface'
import { IUpdateProductDTO } from '@/data/protocols/db/product/updateProductRepository.interface'
import { IProductModel } from '@/domain/models/product.interface'
import { getRepository } from 'typeorm'
import { Product } from '../../entities/Product.entity'

export class ProductRepository
implements
  ICreateProductRepository,
  IFindByProductNameRepository,
  IFindByIdRepository,
  IDeleteProductRepository,
  IProductFindAllRepository,
  IProductFindOneRepository,
  IFindByProductCompanyId {
  async create (date: ICreateProductDTO): Promise<IProductModel> {
    const orm = getRepository(Product)

    return await orm.save(date)
  }

  async findName (name: string): Promise<IProductModel> {
    const orm = getRepository(Product)

    return await orm.findOne({ name })
  }

  async findId (id: number): Promise<IProductModel> {
    const orm = getRepository(Product)

    return await orm.findOne({ id })
  }

  async findProductCompanyId (data: IFindByProductCompanyIdDTO): Promise<IProductModel> {
    const orm = getRepository(Product)

    return await orm.findOne({
      where: {
        company_id: data.company_id,
        id: data.product_id
      }
    })
  }

  async delete (id: number): Promise<boolean> {
    const orm = getRepository(Product)

    const deleteCompany = await orm.delete(id)

    return deleteCompany && true
  }

  async findAll (): Promise<IProductModel[]> {
    const orm = getRepository(Product)

    return await orm.find({
      relations: ['serviceConnection', 'companyConnection'],
      order: {
        company_id: 'ASC'
      }
    })
  }

  async findOne (id: number): Promise<IProductModel[]> {
    const orm = getRepository(Product)

    return await orm.find({
      where: { company_id: id },
      relations: ['serviceConnection']
    })
  }

  async update (id: number, data: IUpdateProductDTO): Promise<boolean> {
    const orm = getRepository(Product)

    const updateProduct = await orm.update(id, data)

    return updateProduct && true
  }
}
