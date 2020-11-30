
import { ICreateProductDTO, ICreateProductRepository } from '@/data/protocols/db/product/createProductRepository.interface'
import { IFindByProductNameRepository } from '@/data/protocols/db/product/findByNameProductRepository.interface'
import { IProductModel } from '@/domain/models/product.interface'
import { getRepository } from 'typeorm'
import { Product } from '../../entities/Product.entity'

export class ProductRepository
implements ICreateProductRepository, IFindByProductNameRepository {
  async create (date: ICreateProductDTO): Promise<IProductModel> {
    const orm = getRepository(Product)

    return await orm.save(date)
  }

  async findName (name: string): Promise<IProductModel> {
    const orm = getRepository(Product)

    return await orm.findOne({ name })
  }
}
