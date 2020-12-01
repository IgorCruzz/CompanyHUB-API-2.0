import { CompanyRepository } from '../../../../infra/db/typeorm/repositories/company/company.repository'
import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { ProductRepository } from '../../../../infra/db/typeorm/repositories/product/product.repository'
import { ServiceRepository } from '../../../../infra/db/typeorm/repositories/service/service.repository'
import { DbDeleteService } from '../../../../data/usecases/service/deleteService.data'
import { DeleteServiceController } from '../../../../presentation/controllers/service/deleteService.controller'

export const makeDeleteController = () => {
  const companyRepository = new CompanyRepository()
  const productRepository = new ProductRepository()
  const serviceRepository = new ServiceRepository()

  const dbDeleteService = new DbDeleteService(
    companyRepository,
    productRepository,
    serviceRepository
  )

  const deleteController = new DeleteServiceController(dbDeleteService)

  return adapRoute(deleteController)
}
