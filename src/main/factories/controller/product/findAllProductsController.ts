import { DbFindAllProducts } from '../../../../data/usecases/product/dbFindAllProducts.data'
import { FindAllProductsController } from '../../../../presentation/controllers/product/findAllProducts.controller'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { ProductRepository } from '../../../../infra/db/typeorm/repositories/product.repository'

export const makeFindAllProductsController = () => {
  const productsRepository = new ProductRepository()
  const dbFindAllProduct = new DbFindAllProducts(productsRepository)

  const findAllProductsController = new FindAllProductsController(
    dbFindAllProduct
  )

  return adapRoute(findAllProductsController)
}
