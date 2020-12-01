import { CompanyRepository } from '../../../../infra/db/typeorm/repositories/company/company.repository'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { ProductRepository } from '../../../../infra/db/typeorm/repositories/product/product.repository'
import { DbDeleteProduct } from '../../../../data/usecases/product/dbDeleteProduct.data'
import { DeleteProductController } from '../../../../presentation/controllers/product/deleteProduct.controller'

export const makeDeleteController = () => {
  const companyRepository = new CompanyRepository()
  const productRepository = new ProductRepository()
  const dbDeleteProduct = new DbDeleteProduct(companyRepository, productRepository, productRepository)

  const deleteController = new DeleteProductController(dbDeleteProduct)

  return adapRoute(deleteController)
}
