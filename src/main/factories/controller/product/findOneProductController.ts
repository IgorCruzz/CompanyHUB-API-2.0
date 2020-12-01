import { DbFindOneProduct } from '../../../../data/usecases/product/dbFindOneProduct.data'
import { ProductRepository } from '../../../../infra/db/typeorm/repositories/product/product.repository'
import { FindOneProductController } from '../../../../presentation/controllers/product/findOneProduct.controller'
import { adapRoute } from '../../../adapters/expressRouter.adapter'

export const makeFindOneProductController = () => {
  const productsRepository = new ProductRepository()
  const dbFindOneProduct = new DbFindOneProduct(productsRepository)

  const findOneProductController = new FindOneProductController(
    dbFindOneProduct
  )

  return adapRoute(findOneProductController)
}
