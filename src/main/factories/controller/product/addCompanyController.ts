import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { DbAddProduct } from '../../../../data/usecases/product/dbAddProduct.data'
import { CreateProductController } from '../../../../presentation/controllers/product/createProduct.controller'
import { CompanyRepository } from '../../../../infra/db/typeorm/repositories/company.repository'
import { ProductRepository } from '../../../../infra/db/typeorm/repositories/product.repository'

export const makeAddProductController = () => {
  const companyRepository = new CompanyRepository()
  const productRepository = new ProductRepository()
  const dbAddProduct = new DbAddProduct(
    companyRepository,
    productRepository,
    productRepository
  )

  const createProductController = new CreateProductController(dbAddProduct)

  return adapRoute(createProductController)
}
