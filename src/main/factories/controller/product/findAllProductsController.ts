import { DbFindAllProducts } from '../../../../data/usecases/product/dbFindAllProducts.data'
import { ProductRepository } from '../../../../infra/db/typeorm/repositories/product/product.repository'
import { FindAllProductsController } from '../../../../presentation/controllers/product/findAllProducts.controller'
import { adapRoute } from '../../../adapters/expressRouter.adapter'

export const makeFindAllProductsController = () => {
  const productsRepository = new ProductRepository()
  const dbFindAllProduct = new DbFindAllProducts(productsRepository)

  const findAllProductsController = new FindAllProductsController(
    dbFindAllProduct
  )

  return adapRoute(findAllProductsController)
}
