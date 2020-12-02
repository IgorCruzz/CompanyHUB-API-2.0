import { adapRoute } from '../../../adapters/expressRouter.adapter'
import { ProductRepository } from '../../../../infra/db/typeorm/repositories/product.repository'
import { DeleteServiceController } from '../../../../presentation/controllers/service/deleteService.controller'
import { DbDeleteService } from '@/data/usecases/service/dbDeleteService.data'
import { CompanyRepository } from '../../../../infra/db/typeorm/repositories/company.repository'
import { ServiceRepository } from '../../../../infra/db/typeorm/repositories/service.repository'

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
