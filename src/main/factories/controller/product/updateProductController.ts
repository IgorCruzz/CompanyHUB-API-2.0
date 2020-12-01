import { CompanyRepository } from '../../../../infra/db/typeorm/repositories/company/company.repository'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { ProductRepository } from '../../../../infra/db/typeorm/repositories/product/product.repository'
import { DbUpdateProduct } from '../../../../data/usecases/product/dbUpdateProduct.data'
import { UpdateProductController } from '../../../../presentation/controllers/product/updateProduct.controller'

export const makeUpdateProductController = () => {
  const companyRepository = new CompanyRepository()
  const productRepository = new ProductRepository()
  const dbUpdateProduct = new DbUpdateProduct(
    companyRepository,
    productRepository,
    productRepository
  )
  const updateProductController = new UpdateProductController(
    dbUpdateProduct
  )

  return adapRoute(updateProductController)
}
