import { CompanyRepository } from '../../../../infra/db/typeorm/repositories/company/company.repository'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { ProductRepository } from '../../../../infra/db/typeorm/repositories/product/product.repository'
import { DbAddProduct } from '../../../../data/usecases/product/dbAddProduct.data'
import { CreateProductController } from '../../../../presentation/controllers/product/createProduct.controller'

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
